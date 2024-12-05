import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import BoundaryJson from "./maoming2.json";
import { Loading, BorderBox10 } from "@jiaminghi/data-view-react";
import styles from "./index.module.scss";

// 边界加载器组件
const Boundaries = () => {
  const map = useMap();

  useEffect(() => {
    L.geoJSON(BoundaryJson, {
      style: {
        color: "#FAF074",
        weight: 2,
        fillColor: "#000",
        fillOpacity: 0.2,
      },
    }).addTo(map);
  }, [map]);

  return null;
};

// 标注点加载器组件
const Markers = ({ locations = [] }) => {
  const map = useMap();
  //  当前保存的标点
  const markersLayer = useRef(L.layerGroup().addTo(map));

  useEffect(() => {
    console.log("locations is ", locations);
    // 清除旧标注点
    markersLayer.current?.clearLayers();

    // 添加标注点和弹窗
    const newMarkers = locations.map((location) => {
      const marker = L.marker(location.position).addTo(map);
      marker.bindPopup(`<b>${location.name}</b><br>${location.info}`);
      // 存储新标注点
      markersLayer.current.addLayer(marker);
      return marker;
    });
  }, [map, locations]);

  return null;
};

// 地图拖拽限制和复位按钮组件
// const MapFeatures = ({ center, zoom, bounds }) => {
//   const map = useMap();

//   // 设置拖拽边界
//   useEffect(() => {
//     if (bounds) {
//       map.setMaxBounds(bounds); // 限制地图拖拽范围
//     }
//   }, [map, bounds]);

//   // 复位按钮
//   const resetView = () => {
//     map.setView(center, zoom); // 设置地图视角回到初始值
//   };

//   return (
//     <button
//       onClick={resetView}
//       style={{
//         position: "absolute",
//         top: "10px",
//         left: "10px",
//         zIndex: 1000,
//         padding: "8px 12px",
//         background: "#007bff",
//         color: "#fff",
//         border: "none",
//         borderRadius: "4px",
//         cursor: "pointer",
//       }}
//     >
//       复位
//     </button>
//   );
// };

//  地图切换 locations 的 按钮工具区
const Tools = ({ locationIndex, setLocationIndex = () => {} }) => {
  const changeLocationIndex = (type = 0) => {
    setLocationIndex(type);
  };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={styles.tools_wrap}
    >
      <div
        className={`${styles.box} ${locationIndex == 0 && styles.active}`}
        onClick={() => changeLocationIndex(0)}
      >
        <BorderBox10>加工企业(10)</BorderBox10>
      </div>
      <div
        className={`${styles.box} ${locationIndex == 1 && styles.active}`}
        onClick={() => changeLocationIndex(1)}
      >
        <BorderBox10>摄像头(4)</BorderBox10>
      </div>
      <div
        className={`${styles.box} ${locationIndex == 2 && styles.active}`}
        onClick={() => changeLocationIndex(2)}
      >
        <BorderBox10>AI设备(0)</BorderBox10>
      </div>
      <div
        className={`${styles.box} ${locationIndex == 3 && styles.active}`}
        onClick={() => changeLocationIndex(3)}
      >
        <BorderBox10>墒情设备(0)</BorderBox10>
      </div>
      <div
        className={`${styles.box} ${locationIndex == 4 && styles.active}`}
        onClick={() => changeLocationIndex(4)}
      >
        <BorderBox10>气象设备(0)</BorderBox10>
      </div>
    </div>
  );
};

// 地图组件
const MapComponent = () => {
  // 定义茂名市的中心点、缩放级别和拖拽边界
  const center = [21.87, 111.02]; // 茂名市中心坐标
  const bounds = [
    [18.0, 107.5], // 左下角（近似值）
    [24.5, 118.0], // 右上角（近似值）
  ];
  const [zoom, setZoom] = useState(9);
  const init = () => {
    console.log(window.innerWidth);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  };
  //  标点列表
  const loactionsList = [
    [
      {
        name: "茂名市中心",
        position: [21.67, 110.92],
        info: "这是茂名市的中心地带。",
      },
      {
        name: "高州市",
        position: [21.68, 110.95],
        info: "高州市是茂名的一个下辖市。",
      },
      {
        name: "化州市",
        position: [21.63, 110.87],
        info: "化州市是茂名的另一个下辖市。",
      },
    ],
    [
      {
        name: "test",
        position: [21.72, 110.97],
        info: "这是测试数据。",
      },
      {
        name: "test",
        position: [21.78, 110.77],
        info: "这是测试数据。",
      },
    ],
    [
      {
        name: "test",
        position: [21.98, 111.07],
        info: "这是测试数据。",
      },
      {
        name: "test",
        position: [22.11, 110.77],
        info: "这是测试数据。",
      },
    ],
  ];
  //  标点下标
  const [locationIndex, setLocationIndex] = useState(0);

  useEffect(() => {
    init();
  }, []);
  const [loading, setLoading] = useState(true);

  return loading ? (
    <Loading>Loading...</Loading>
  ) : (
    <div className={styles.container}>
      <MapContainer
        center={center} // 茂名市中心坐标
        zoom={zoom}
        minZoom={zoom - 0.5}
        maxZoom={zoom + 0.5}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
        attributionControl={false}
        // dragging={false}
      >
        {/* 高德地图瓦片 */}
        <TileLayer
          url="https://webst{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}"
          subdomains={["01", "02", "03", "04"]}
        />

        {/* 加载边界 */}
        {<Boundaries />}

        {/* 加载标注点 */}
        {<Markers locations={loactionsList?.[locationIndex] || []} />}

        {/* 设置拖拽边界和复位按钮 */}
        {/* <MapFeatures center={center} zoom={zoom} bounds={bounds} /> */}

        {/* 按钮工具区 */}
        <Tools
          setLocationIndex={setLocationIndex}
          locationIndex={locationIndex}
        />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
