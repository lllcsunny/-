/**
 * Created by hp1 on 2017/7/4.
 */
angular.module("myapp",[])
    .controller("todo",["$scope",function($scope){
        $scope.data=localStorage.message?JSON.parse(localStorage.message):[];
        console.log($scope.data)
        /*添加列表*/
        $scope.add=function(){
            var obj={};
            obj.id=maxid();
            obj.name="新建备忘录";
            obj.son=[];
            $scope.data.push(obj);
            localStorage.message=JSON.stringify($scope.data);
        }
        //存取当前下标
        $scope.index=0;
        $scope.index=function(index){
            $scope.now=index;
        };
        //删除标题
        $scope.del=function (id) {
            angular.forEach($scope.data,function (val, key) {
                if($scope.data[key].id==id){
                    $scope.data.splice(key,1);
                }
            })
        }
        function maxid(){
            var id=0;
            var tempid=0;
            if($scope.data.length==0){
                id=1;
            }else{

                for(var i=0;i<$scope.data.length;i++){
                    if($scope.data[i].id>tempid){
                        tempid=$scope.data[i].id

                    }
                }

                id=tempid+1;
            }
            return id;
        }



    }])