$p_id = !empty($_POST["p_id"]) ? $_POST["p_id"] : ""; //文章ID
if(!isset($_COOKIE["admin_".$p_id])){//如果不存在当前文章的cookie，就生成
setcookie("admin_".$p_id,"admin_".$p_id,time()+3600);
}
//读取 JSON
if(file_exists("count.json")){//如果文件存在
$json = file_get_contents("count.json");
$arr = json_decode($json,true);
if(isset($arr[$p_id])){ //如果数组中存在，就直接修改
//if(!isset($_COOKIE["admin_".$p_id])){ //如果该文章 cookie 不存在 ，文章点击量就+1
$click = $arr[$p_id];
$arr[$p_id] = $click+1; //文章点击量+1
//}
}else{//不存在 ，就添加
$arr[$p_id]=1;
}
file_put_contents("count.json",json_encode($arr));//写入
}else{ //如果文件不存在
$arr[$p_id]=1;
file_put_contents("count.json",json_encode($arr));
}
echo $arr[$p_id];