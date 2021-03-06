<?php
header("content-type:text/html;charset=utf-8");
//连接数据库
$mysqli = new mysqli(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);
if (!$mysqli) {
	die("Couldn't connect:".mysqli_error($mysqli));
}
//创建数据库
if (mysqli_query($mysqli, "CREATE DATABASE orders_database")) {
	echo "Database created"."<br/>";
}else{
	echo "Database creation failed:".mysqli_error($mysqli)."<br/>";
}
//在数据库中创建表格
mysqli_select_db($mysqli, "orders_database");
mysqli_query($mysqli, "set names utf8");
//mySql语句
$sqlCommand = "CREATE TABLE Orders(yiyuanmingcheng varchar(30),
yishengxingming varchar(10), 
yishengdianhua varchar(15),
huanzhexingming varchar(10),
nianling varchar(5),
xingbie varchar(10),
huanzhedianhua varchar(15),
order_year varchar(5),
order_month varchar(5),
order_day varchar(5),
order_hour varchar(5),
delivery_year varchar(5),
delivery_month varchar(5),
delivery_day varchar(5),
delivery_hour varchar(5),
sandi_cailiao_chuntai varchar(5),
sandi_cailiao_guge varchar(5),
sandi_cailiao_shuzhimoxing varchar(5),
sandi_xiufuleixing_dazhijia varchar(5),
sandi_xiufuleixing_xiaozhijia varchar(5), 
sandi_xiufuleixing_qianti varchar(5),
sandi_xiufuleixing_zhuanghe varchar(5),
sandi_xiufuleixing_guan varchar(5),
zhongzhi_cailiao_bianselong varchar(5),
zhongzhi_cailiao_weilande varchar(5),
zhongzhi_cailiao_guochanyanghuagao varchar(5),
zhongzhi_cailiao_chuntai varchar(5),
zhongzhi_cailiao_begoguge varchar(5),
zhongzhi_cailiao_guijinshu varchar(5),
zhongzhi_cailiao_juheci varchar(5),
zhongzhi_xiufuleixing_hanguo varchar(5),
zhongzhi_xiufuleixing_oumei varchar(5),
zhongzhi_xiufuleixing_quanci varchar(5),
zhongzhi_xiufuleixing_quangao varchar(5),
zhongzhi_xiufuleixing_kaoci varchar(5),
zhongzhi_xiufuleixing_zhongzhidaoban varchar(5),
zhongzhi_xiufuleixing_zhongzhiganka varchar(5),
zhongzhi_xiufuleixing_gexinghuajitai varchar(5),
zhongzhi_xiufuleixing_gexinghuayitiguan varchar(5),
meixue_cailiao_bolitaoci varchar(5),
meixue_cailiao_zhuci varchar(5),
meixue_cailiao_meixuezhenduanla varchar(5),
meixue_xiufuleibie_meibaichaobaotiemian varchar(5),
meixue_xiufuleibie_bolitaocitiemian varchar(5),
meixue_xiufuleibie_qianti varchar(5),
meixue_xiufuleibie_quanguan varchar(5),
guding_maierfangshengquanci varchar(5),
guding_maierfangshengquangao varchar(5),
guding_cailiao_bianselong varchar(5),
guding_cailiao_weilande varchar(5),
guding_cailiao_guochanyanghuagao varchar(5),
guding_cailiao_lava varchar(5),
guding_cailiao_begoguge varchar(5),
guding_cailiao_guijinshu varchar(5),
guding_cailiao_juhewu varchar(5),
guding_xiufuleixing_quanci varchar(5),
guding_xiufuleixing_quanguan varchar(5),
guding_xiufuleixing_qianti varchar(5),
guding_xiufuleixing_zhuanghe varchar(5),
guding_xiufuleixing_kaoci varchar(5),
huodong_zhijia_da varchar(5),
huodong_zhijia_xiao varchar(5),
huodong_zhijia_bego varchar(5),
huodong_zhijia_bptwanmei varchar(5),
huodong_zhijia_nuobiling varchar(5),
huodong_paiya_kaifeng varchar(5),
huodong_paiya_kaijing varchar(5),
huodong_paiya_songfeng varchar(5),
huodong_jiaotuo_suliaotuoya varchar(5),
huodong_jiaotuo_gexinghuatuopan varchar(5),
huodong_jiaotuo_jinshuhedian varchar(5),
huodong_jiaotuo_jinshuhemian varchar(5),
huodong_jiaotuo_zhuzaohezhituo varchar(5),
huodong_jiaotuo_chengpinwang varchar(5),
huodong_jiaotuo_zhusuzhuya varchar(5),
huodong_jiaotuo_quanbankou varchar(10),
huodong_yinxingyichi_da varchar(5),
huodong_yinxingyichi_xiao varchar(5),
zhengji_yinxingbaochiqi varchar(5),
zhengji_wanzhibaochiqi varchar(5),
zhengji_yemoyatao varchar(5),
zhengji_jianxibaochiqi varchar(5),
zhengji_luoxuankuogongqi varchar(5),
zhengji_jiaozhengqi varchar(5),
zhengji_zuhanqi varchar(5),
jingmifujian_qiumaofuzhuoti varchar(5),
jingmifujian_cixingfuzhuoti varchar(5),
jingmifujian_shuandaofujian varchar(5),
jingmifujian_taotongguan varchar(5),
jingmifujian_mk1 varchar(5),
bisesheji_jing varchar(50),
bisesheji_zhong varchar(50),
bisesheji_qie varchar(50),
bisesheji_jiseya varchar(50),
bisesheji_shineiguan varchar(5),
bisesheji_shiciya varchar(5),
bisesheji_shizhijia varchar(5),
bisesheji_shipaiya varchar(5),
bisesheji_danguan varchar(5),
bisesheji_lianqiao varchar(5),
suidanfupin_ladi varchar(5),
suidanfupin_jiuya varchar(5),
suidanfupin_rengongyayin varchar(5),
suidanfupin_tuopan varchar(5),
suidanfupin_hejia varchar(5),
suidanfupin_cankaomo varchar(5),
suidanfupin_jitai varchar(5),
suidanfupin_zhuanyigan varchar(5),
suidanfupin_tidaiti varchar(5),
suidanfupin_qita varchar(50),
suidanfupin_shuliang varchar(50),
yishengshuoming varchar(1000),
jigongbeizhu varchar(1000)
)DEFAULT CHARSET=utf8";
if (mysqli_query($mysqli, $sqlCommand)) {
	echo "Table Created";
}else{
	echo "Creating Table Failed".mysqli_error($mysqli);
}
mysqli_close($mysqli);
?>