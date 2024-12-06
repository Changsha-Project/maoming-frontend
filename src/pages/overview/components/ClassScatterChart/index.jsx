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
      tooltip: {
        trigger: "item",
        formatter: (params) => {
          return `X: ${params.value[0]}<br>Y: ${params.value[1]}<br>文字: ${params.data.text}`;
        },
      },
      xAxis: { show: false },
      yAxis: { show: false },
      series: [
        {
          type: "scatter",
          symbolSize: (data) => {
            // 返回随机的散点大小
            return Math.random() * 100 + 20;
          },
          data: [
            { value: [1.0, 3.04], text: "配饰" },
            { value: [8.07, 4.95], text: "精油" },
            { value: [3.0, 1.58], text: "饰品" },
            { value: [4.05, 4.81], text: "摆件" },
            { value: [5.0, 3.33], text: "香片" },
            { value: [7.0, 8.66], text: "盘香" },
            { value: [6.4, 9.81], text: "线香" },
            { value: [5.2, 14.33], text: "珠串" },
            { value: [2.3, 9.96], text: "沉香酒" },
            { value: [4.5, 17.82], text: "手链" },
            { value: [7.15, 8.2], text: "香粉" },
          ],
          label: {
            show: true,
            formatter: (params) => params.data.text, // 显示文字
            position: "inside", // 文字显示在点中间
            color: "#fff", // 文字颜色
            fontSize: 12,
          },
          itemStyle: {
            color: () => {
              const opacity = 0.8;
              // 随机生成颜色
              const colors = [
                `rgba(103,32,250,${opacity})`,
                `rgba(174,32,250,${opacity})`,
                `rgba(59,250,187,${opacity})`,
                `rgba(32,111,250,${opacity})`,
                `rgba(32,43,250,${opacity})`,
                `rgba(250,244,32,${opacity})`,
                `rgba(181,250,32,${opacity})`,
                `rgba(250,98,30,${opacity})`,
              ];
              return colors[Math.floor(Math.random() * colors.length)];
            },
            opacity: 0.9, // 散点透明度
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
