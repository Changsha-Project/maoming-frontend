import { useEffect, useRef } from "react";
import * as echarts from "echarts";
const Chart = () => {
  // 图表容器引用
  const chartRef = useRef(null);

  // 初始化和更新图表
  useEffect(() => {
    if (!chartRef.current) return;

    // 初始化 echarts 实例
    const chart = echarts.init(chartRef.current);

    // 定义图表配置
    const options = {
      title: {
        text: "Nightingale Chart",
        subtext: "Fake Data",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        left: "center",
        top: "bottom",
        data: [
          "rose1",
          "rose2",
          "rose3",
          "rose4",
          "rose5",
          "rose6",
          "rose7",
          "rose8",
        ],
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      series: [
        {
          name: "Radius Mode",
          type: "pie",
          radius: [20, 140],
          center: ["25%", "50%"],
          roseType: "radius",
          itemStyle: {
            borderRadius: 5,
          },
          label: {
            show: false,
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          data: [
            { value: 40, name: "rose 1" },
            { value: 33, name: "rose 2" },
            { value: 28, name: "rose 3" },
            { value: 22, name: "rose 4" },
            { value: 20, name: "rose 5" },
            { value: 15, name: "rose 6" },
            { value: 12, name: "rose 7" },
            { value: 10, name: "rose 8" },
          ],
        },
        {
          name: "Area Mode",
          type: "pie",
          radius: [20, 140],
          center: ["75%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 5,
          },
          data: [
            { value: 30, name: "rose 1" },
            { value: 28, name: "rose 2" },
            { value: 26, name: "rose 3" },
            { value: 24, name: "rose 4" },
            { value: 22, name: "rose 5" },
            { value: 20, name: "rose 6" },
            { value: 18, name: "rose 7" },
            { value: 16, name: "rose 8" },
          ],
        },
      ],
    };

    // 渲染图表
    chart.setOption(options);

    // 在组件卸载时销毁实例
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div
      style={{
        padding: "20px",
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
    </div>
  );
};

export default Chart;
