import * as React from 'react'
import { PoseGroup } from 'react-pose'

export namespace ConditionalPoseGroup {
  export interface Props {
    enable: boolean;
    children: React.ReactNode;
  }
}

export const ConditionalPoseGroup = ({enable, children}: ConditionalPoseGroup.Props) =>
  enable ? <PoseGroup><React.Fragment>{ children }</React.Fragment></PoseGroup> : <React.Fragment>{ children }</React.Fragment>
