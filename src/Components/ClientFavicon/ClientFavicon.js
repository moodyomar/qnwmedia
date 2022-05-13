import './ClientFavicon.css'


const ClientFavicon = ({name,website,favicon,placment}) => { 

return(

<div className='ClientFavicon'>
	<div class="avatar" style={{
left:placment.left,
right:placment.right,
top:placment.top,
bottom:placment.bottom
}}>
		<a href={website}>
			<img src={favicon} alt={name} />
		</a>
	</div>
</div>

)
}

export default ClientFavicon