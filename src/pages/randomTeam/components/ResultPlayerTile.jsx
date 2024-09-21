import './ResultPlayerTile.css';


export const ResultPlayerTile = ({ name }) => {
  return (
    <div className='player-tile'>
      <img
        className='champion-img'
        src="/assets/LOL_assets/championi_icon.png"
        alt="Logo"
      />
      <span className='champion-name'>{name}</span>
    </div>
  )
}