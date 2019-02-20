import * as React from 'react'
import { GameActions } from 'app/actions/game';
import { PALETTES, Theme } from 'app/constants/palette'

const themes = Object.keys( PALETTES );

export namespace ThemeSelector {
  export interface Props {
    theme: Theme;
    setBackground: typeof GameActions.setBackground;
  }
}

export const ThemeSelector = ({ theme, setBackground }: ThemeSelector.Props) => (
	<React.Fragment>
    <div style={{marginBottom: '2vh'}}>theme:{ theme }</div>
    <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      { PALETTES[theme].map((color: string) => (<div
        key={color}
        style={{ width: '5vw', height: '5vw', marginRight: '1vw', float: 'left', background: color }}>
      </div>))}
    </div>
    <div style={{width: '100%', display: 'block', paddingTop: '2vh'}}>
      <div
        style={{ float: 'left' }}
        onClick={(e: any) => {
          e.preventDefault()
          const target = themes.indexOf(theme) - 1
          const targetTheme = themes[
            (target === -1) ? themes.length - 1: target
          ] as Theme;
          setBackground(targetTheme)
        }}
      >Previous</div>
      <div
        style={{ float: 'right' }}
        onClick={(e: any) => {
          e.preventDefault()
          const target = themes.indexOf(theme) + 1
          const targetTheme = themes[
            (target === themes.length ) ? 0: target
          ] as Theme;
          console.log(theme, themes)
          setBackground(targetTheme)
        }}
      >Next</div>
    </div>
  </React.Fragment>
)
