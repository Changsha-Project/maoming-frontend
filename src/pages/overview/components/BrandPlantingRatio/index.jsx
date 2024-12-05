import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import styles from "./index.module.scss";
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
        // text: "Nightingale Chart",
        // subtext: "Fake Data",
        // left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      series: [
        {
          name: "Area Mode",
          type: "pie",
          radius: [16, 120],
          center: ["50%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 5,
          },
          textStyle: {
            // 设置 legend 中字体的颜色
            color: (params) => {
              // 通过 `params` 获取饼块颜色，并将其应用到 legend 字体上
              console.log("params", params);
              return params.color;
            },
          },
          data: [
            { value: 30, name: "白木 1", itemStyle: { color: "#c12e34" } },
            { value: 28, name: "白木 2", itemStyle: { color: "#e6b600" } },
            { value: 26, name: "白木 3", itemStyle: { color: "#0098d9" } },
            { value: 24, name: "白木 4", itemStyle: { color: "#2b821d" } },
            { value: 22, name: "白木 5", itemStyle: { color: "#005eaa" } },
            { value: 20, name: "白木 6", itemStyle: { color: "#339ca8" } },
            { value: 18, name: "白木 7", itemStyle: { color: "#cda819" } },
            { value: 16, name: "白木 8", itemStyle: { color: "#32a487" } },
          ],
          label: {
            show: true,
            formatter: "{b}",
            color: "inherit",
          },
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
    <div className={styles.container}>
      {/* 图表容器 */}
      <div ref={chartRef} className={styles.chart}></div>
    </div>
  );
};

export default Chart;
