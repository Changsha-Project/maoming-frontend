import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { Radio } from "antd";
const BarChart = () => {
  // 定义面积和销售额数据
  const areaData = [6.75, 8.76, 9.98, 11.62, 13.2];
  const salesData = [5.4, 7.2, 8.1, 10.5, 12.8];
  const xAxisData = ["2018年", "2019年", "2020年", "2021年", "2022年"];

  // 定义当前显示的数据和标题
  const [isArea, setIsArea] = useState(true);

  // 图表容器引用
  const chartRef = useRef(null);

  // 初始化和更新图表
  useEffect(() => {
    if (!chartRef.current) return;

    // 初始化 echarts 实例
    const chart = echarts.init(chartRef.current);

    // 定义图表配置
    const getOption = () => ({
      title: {
        text: isArea ? "面积（万亩）" : "销售额（万元）",
        left: "left", // 标题左上角对齐
        textStyle: { color: "#fff", fontSize: 18 },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
      },
      grid: {
        left: "5%",
        right: "5%",
        bottom: "1%", // 调整底部避免被溢出
        top: "20%", // 调整顶部避免和标题重叠
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: xAxisData,
        axisLine: { lineStyle: { color: "#fff" } },
        axisLabel: { color: "#fff" },
      },
      yAxis: {
        type: "value",
        axisLine: { lineStyle: { color: "#fff" } },
        splitLine: { lineStyle: { color: "#555" } },
        axisLabel: { color: "#fff" },
      },
      series: [
        {
          name: isArea ? "面积" : "销售额",
          type: "bar",
          data: isArea ? areaData : salesData,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#67c8ff" },
              { offset: 1, color: "#0057ff" },
            ]),
          },
          barWidth: "70%", // 调整柱状图的宽度
        },
      ],
    });

    // 渲染图表
    chart.setOption(getOption());

    // 在组件卸载时销毁实例
    return () => {
      chart.dispose();
    };
  }, [isArea]); // 每次 isArea 变化时更新图表

  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "10px",
        position: "relative",
        width: "100%", // 调整为父容器宽度
        height: "100%", // 设置固定高度
        overflow: "hidden", // 避免溢出
        color: "#fff",
      }}
    >
      {/* 图表容器 */}
      <div
        ref={chartRef}
        style={{
          width: "100%",
          height: "100%",
        }}
      ></div>

      {/* 切换按钮组 */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "20px", // 定位在右上角
          display: "flex",
          gap: "10px",
        }}
      >
        <Radio.Group
          onChange={(e) => {
            setIsArea(e.target.value);
          }}
          value={isArea}
        >
          <Radio value={true}>
            <span style={{ color: "#fff" }}>面积</span>
          </Radio>
          <Radio value={false}>
            <span style={{ color: "#fff" }}>销售额</span>
          </Radio>
        </Radio.Group>
      </div>
    </div>
  );
};

export default BarChart;
