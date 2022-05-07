export const NavItems = ({menu}) => {
  return (
<ul>
      {menu.map((item,i) => (
        <li key={i}><a href={`/${item}`}>{item}</a></li>
      ) )}
    </ul>
  )
}