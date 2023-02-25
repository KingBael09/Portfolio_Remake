import { ResponsivePie } from "@nivo/pie";
import { useDataContext } from "@context/dataLayer";
import { useState } from "react";

export interface DataProps {
  id: string;
  value: number;
}
interface PieProps {
  data: DataProps[];
}

const PieChart = ({ data }: PieProps) => {
  const currentWidth = useDataContext();
  const [current, setCurrent] = useState<any>(null);
  const isMobile = currentWidth < 1024;
  return (
    <ResponsivePie
      // data={data.sort(() => Math.random() - 0.5)}
      // randomize data position
      data={data
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)}
      margin={
        isMobile
          ? { left: 10, right: 10, top: 20, bottom: 80 }
          : { top: 50, right: 120, bottom: 120, left: 120 }
      }
      innerRadius={isMobile ? 0.5 : 0.6}
      // innerRadius={0.6}
      enableArcLinkLabels={!isMobile}
      // arcLinkLabelsSkipAngle={5}
      arcLabelsSkipAngle={30}
      padAngle={isMobile ? 2 : 4}
      cornerRadius={8}
      //   startAngle={isMobile ? -120 : 0}
      // arrow target color
      arcLinkLabelsTextColor={{ from: "color", modifiers: [] }}
      // arrowColor
      arcLinkLabelsColor={{ from: "color", modifiers: [] }}
      // hover effect inner
      // activeInnerRadiusOffset={0.5}
      // hover effect outer
      arcLabel={({ formattedValue }) => `${formattedValue}%`}
      activeOuterRadiusOffset={isMobile ? 0 : 8}
      // tooltip
      layers={[
        "arcLinkLabels",
        "arcs",
        "arcLabels",
        "legends",
        ({ centerX, centerY }) => {
          return (
            <text
              x={centerX}
              y={centerY}
              textAnchor="middle"
              dominantBaseline="central"
              style={{
                // fontSize: "10px",
                fontWeight: 600,
                fill: "#fff",
              }}
            >
              {current ? (
                <>
                  {current.id
                    .match(/[\+\-*/!@#$%^&(){}\[\],.<>?\\|:;"'_~`\s]|[A-Z]+/g)
                    .join("")}{" "}
                  : {current.value}%
                </>
              ) : null}
            </text>
          );
        },
      ]}
      onClick={(node, e) => {
        isMobile && setCurrent(node);
      }}
      arcLinkLabel={isMobile ? (d) => `${d.id}(${d.value}%)` : undefined}
      tooltip={({ datum: { id, value, color } }) => (
        <>
          {!isMobile && (
            <div
              style={{
                padding: 12,
                color,
                background: "#222222",
                fontFamily: "var(--codeFont)",
              }}
            >
              <strong>
                {id} : {value}%
              </strong>
            </div>
          )}
        </>
      )}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          itemWidth: isMobile ? 100 : 150,
          itemHeight: 18,
          translateX: 0,
          translateY: isMobile?50:80,
          itemDirection: "top-to-bottom",
          symbolShape: "circle",
          itemTextColor: "#fff",
          symbolSize: 20,
        },
      ]}
      arcLinkLabelsStraightLength={isMobile ? 10 : undefined}
      arcLinkLabelsDiagonalLength={isMobile ? 5 : undefined}
      theme={{
        fontFamily: "var(--codeFont)",
        labels: {
          text: { fontSize: isMobile ? "1rem" : "1.2rem" },
        },
        legends: {
          text: {
            fontSize: isMobile ? "0.9rem" : "1.2rem",
          },
        },
        annotations: {
          text: {
            fontSize: isMobile ? "1rem" : "1.2rem",
          },
        },
      }}
    />
  );
};
export default PieChart;