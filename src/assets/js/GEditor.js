class networkEditor{
    constructor(mainControlDiv){
        this.config = {
            stageFrames : 500,
            //新建节点默认尺寸
            defaultWidth : 64,
            defaultHeight : 64,
            //滚轮缩放比例
            defaultScal : 0.95,
            ////是否显示鹰眼对象
            eagleEyeVsibleDefault : false,
            //连线颜色
            strokeColor : "black",
            //连线宽度
            lineWidth : 1,
            //二次折线尾端长度
            offsetGap : 40,
            //线条箭头半径
            arrowsRadius : 0,
            //折线的方向
            direction : "horizontal",
            //节点文字颜色
            nodeFontColor : "black",
            //连线文字颜色
            lineFontColor : "black",
            //是否显示连线阴影
            showLineShadow : false,
            //节点旋转幅度
            rotateValue : 0.5,
            //节点缩放幅度
            nodeScale : 0.2,
            alpha : 1,
            containerAlpha : 0.5,
            nodeStrokeColor : "22,124,255",
            lineStrokeColor : "black",
            fillColor :"22,124,255",
            containerFillColor : "10,100,80",
            shadow : false,
            shadowColor : "rgba(0,0,0,0.5)",
            font : "12px Consolas",
            fontColor:"black",
            lineJoin : "lineJoin",
            borderColor:"10,10,100",
            borderRadius : 30,
            shadowOffsetX : 3,
            shadowOffsetY : 6
        };
    }
}