/**
 * 分页函数
 * pno--页数
 * psize--每页显示记录数
 * 分页部分是从真实数据行开始，因而存在加减某个常数，以确定真正的记录数
 * 纯js分页实质是数据行全部加载，通过是否显示属性完成分页功能
 **/
function goPage(pno,psize){
    var container = document.getElementsByClassName("row");
    var num = container.length; //div长度
    console.log(num);
    var totalPage = 0;//总页数
    var pageSize = psize;//每页显示行数
    //总共分几页 
    if(num / pageSize > parseInt( num / pageSize)){   
            totalPage = parseInt( num / pageSize) + 1;   
       }else{   
           totalPage = parseInt( num / pageSize);   
       }   
    var currentPage = pno;//当前页数
    var startRow = (currentPage - 1) * pageSize + 1;//开始显示的行  31 
       var endRow = currentPage * pageSize;//结束显示的行   40
       endRow = (endRow > num) ? num : endRow;    
       // console.log(endRow);
       //遍历显示数据实现分页
    for(var i = 1; i < ( num + 1 ); i ++){    
        var irow = container[i - 1];
        if( i >= startRow && i <= endRow){
            irow.style.display = "block";
        }else{
            irow.style.display = "none";
        }
    }
    // "共" + num + "条记录" + 
    var tempStr = "<p style='margin-left:10px; margin-right:40px; display:inline-block;'>当前第&nbsp;<span style='color:red;'>" + currentPage + "&nbsp;</span>页</p>";
    if(currentPage > 1){
        tempStr += "<a href=\"#\" onClick=\"goPage(" + (1) + "," + psize + ")\">首页&nbsp;</a>";
        tempStr += "<a href=\"#\" onClick=\"goPage(" + (currentPage - 1) + "," + psize + ")\">&nbsp;<上一页&nbsp;</a>"
    }else{
        tempStr += "首页&nbsp;";
        tempStr += "&nbsp;<上一页&nbsp;";    
    }

    if(currentPage < totalPage){
        tempStr += "<a href=\"#\" onClick=\"goPage(" + (currentPage + 1) + "," + psize + ")\">&nbsp;下一页>&nbsp;</a>";
        tempStr += "<a href=\"#\" onClick=\"goPage(" + (totalPage) + "," + psize + ")\">&nbsp;尾页</a>";
    }else{
        tempStr += "&nbsp;下一页>&nbsp;";
        tempStr += "&nbsp;尾页";    
    }

    document.getElementById("page").innerHTML = tempStr;
}
