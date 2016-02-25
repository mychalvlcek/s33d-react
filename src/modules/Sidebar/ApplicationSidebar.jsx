export default class extends React.Component {
	render() {
		return (
			<SidebarNav>
				<SidebarNavItem glyph='icon-fontello-gauge' name='Blank' href='/' />
				<SidebarNavItem glyph='icon-feather-mail' name={<span>Menu <BLabel className='bg-darkgreen45 fg-white'>3</BLabel></span>}>
					<SidebarNav>
						<SidebarNavItem glyph='icon-feather-inbox' name='Inbox' href='#' />
						<SidebarNavItem glyph='icon-outlined-mail-open' name='Mail' href='#' />
						<SidebarNavItem glyph='icon-dripicons-message' name='Compose' href='#' />
					</SidebarNav>
				</SidebarNavItem>
			</SidebarNav>
		);
	}
}