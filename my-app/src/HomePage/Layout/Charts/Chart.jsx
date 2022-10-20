import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";
import { useSelector } from "react-redux";

const BarChart = () => {
  // const [chartdata, setChartData] = useState();
  const users = useSelector((state) => state.users.users);
  console.log("2");
  // setChartData(users);

  const config = {
    isGroup: true,
    xField: "id",
    yField: "sales",
    seriesField: "first_name",

    /** 设置颜色 */
    //color: ['#1ca9e6', '#f88c24'],

    /** 设置间距 */
    // marginRatio: 0.1,
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: "interval-adjust-position",
        }, // 数据标签防遮挡
        {
          type: "interval-hide-overlap",
        }, // 数据标签文颜色自动调整
        {
          type: "adjust-color",
        },
      ],
    },
  };
  return <Column width={500} data={users} {...config} />;
};

export default BarChart;
