<?php
set_time_limit(0);
$ip = "192.168.8.100";
$port = 8888;
// $tcp = getprotobyname("tcp");
/**
 *建立socket
 *
 *参数1:domain:
 *AF_INET 	IPv4 网络协议。TCP 和 UDP 都可使用此协议。
 *AF_INET6 	IPv6 网络协议。TCP 和 UDP 都可使用此协议。
 *AF_UNIX 	本地通讯协议。具有高性能和低成本的 IPC（进程间通讯）。
 *
 *参数2:type
 *SOCK_STREAM 	提供一个顺序化的、可靠的、全双工的、基于连接的字节流。支持数据传送流量控制机制。TCP 协议即基于这种流式套接字。
 *SOCK_DGRAM 	提供数据报文的支持。(无连接，不可靠、固定最大长度).UDP协议即基于这种数据报文套接字。
 *SOCK_SEQPACKET 	提供一个顺序化的、可靠的、全双工的、面向连接的、固定最大长度的数据通信；数据端通过接收每一个数据段来读取整个数据包。
 *SOCK_RAW 	提供读取原始的网络协议。这种特殊的套接字可用于手工构建任意类型的协议。一般使用这个套接字来实现 ICMP 请求（例如 ping）。
 *SOCK_RDM 	提供一个可靠的数据层，但不保证到达顺序。一般的操作系统都未实现此功能。
 */
if (!($socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP))) {
	echo "socket_create()失败:".socket_strerror($sock)."\n";
}
//绑定ip和端口号
if (!($bindResult = socket_bind($socket, $ip, $port))) {
	echo "socket_bind()失败:".socket_strerror($bindResult)."\n";
}
//开始监听
if (($listenResult = socket_listen($socket, 4)) < 0) {
	echo "socket_listen()失败:".socket_strerror($listenResult)."\n";
}
//初始化一个数据,和客户端通信
$buffer = "buffer";
while(true){
	//接受客户端请求的一个socket连接
	$connetction = socket_accept($socket);
	if (!$connetction) {
		echo "Connetction Failed";
	}else{
		echo "Socket Connected\n";
		//向客户端传递一个信息数据
		if ($buffer != "") {
			echo "Sent Data to Client\n";
			socket_write($connetction, $buffer."\n");
			echo "Wrote to Socket\n";
		}else{
			echo "No Data in the Buffer\n";
		}
		//从客户端获取数据
		while($data = socket_read($connetction, 8192)){
			printf("Buffer:".$data."\n");
			//取得信息后给客户端一个反馈
			socket_write($connetction, "Your data is received successfully!\n");
		}
	}
}
socket_close($connetction);
printf("Socket Closed");
?>