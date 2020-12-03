import React from 'react';
import classes from './TopicByMonthChart.module.css';
import Aux from '../../hoc/Aux';
import { BarGroup } from '@visx/shape';
import { AxisBottom } from '@visx/axis';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { timeParse } from 'd3-time-format';

export type BarGroupProps = {
  data: any;
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  events?: boolean;
};

type Topics = 'potato' | 'community' | 'security' | 'sport' | 'management' | 'fishing' | 'celebrity' | 'wedding' | 'birthday' | 'shopping' ;

const blue = '#aeeef8';
export const green = '#e5fd3d';
const purple = '#9caff6';
export const background = '#612efb';

const defaultMargin = { top: 40, right: 0, bottom: 40, left: 0 };

export default function TopicByMonthChart({data, width, height, events = false, margin = defaultMargin,}: BarGroupProps) {

  const posts = data;
  const keys = posts.id;
  const topics = posts.likelyTopics.label as Topics[];

  const formatDate = timeParse('%Y-%m-%d');

  // accessors
  const getDate = (d: any) => new Date(d.createdAt);

  // scales
  const dateScale = scaleBand<string>({
    domain: posts.map(getDate),
    padding: 0.2,
  });
  const topicsScale = scaleBand<string>({
    domain: keys,
    padding: 0.1,
  });
  const tempScale = scaleLinear<number>({
    domain: [0, Math.max(...data.map((d: { [x: string]: any; }) => Math.max(...keys.map((key: string | number) => Number(d[key])))))],
  });
  const colorScale = scaleOrdinal<string, string>({
    domain: keys,
    range: [blue, green, purple],
  });

  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // update scale output dimensions
  dateScale.rangeRound([0, xMax]);
  topicsScale.rangeRound([0, dateScale.bandwidth()]);
  tempScale.range([yMax, 0]);

  return width < 10 ? null : (
    <Aux>
      <div className={classes.TopicByMonthChart}>
        <svg width={width} height="400">
        <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />
        <Group top={margin.top} left={margin.left}>
          <BarGroup
            data={data}
            keys={topics}
            height={yMax}
            x0={getDate}
            x0Scale={dateScale}
            x1Scale={topicsScale}
            yScale={tempScale}
            color={colorScale}
          >
            {barGroups =>
              barGroups.map(barGroup => (
                <Group key={`bar-group-${barGroup.index}-${barGroup.x0}`} left={barGroup.x0}>
                  {barGroup.bars.map(bar => (
                    <rect
                      key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                      x={bar.x}
                      y={bar.y}
                      width={bar.width}
                      height={bar.height}
                      fill={bar.color}
                      rx={4}
                      onClick={() => {
                        if (!events) return;
                        const { key, value } = bar;
                        alert(JSON.stringify({ key, value }));
                      }}
                    />
                  ))}
                </Group>
              ))
            }
          </BarGroup>
        </Group>
        <AxisBottom
          top={yMax + margin.top}
          tickFormat={formatDate}
          scale={dateScale}
          stroke={green}
          tickStroke={green}
          hideAxisLine
          tickLabelProps={() => ({
            fill: green,
            fontSize: 11,
            textAnchor: 'middle',
          })}
        />
      </svg>
    </div>
    </Aux>
  );
}