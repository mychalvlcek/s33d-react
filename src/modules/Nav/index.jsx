<NavBar>
	<Container fluid>
		<NavHeader>
			<NavToggle target='navcontainer1'>Toggle navigation</NavToggle>
			<NavBrand>Brand</NavBrand>
		</NavHeader>
		<NavContent id='navcontainer1' collapse>
			<Nav>
				<NavItem active href='#'>Link 1</NavItem>
				<NavItem href='#'>CSS</NavItem>
				<NavItem dropdown>
					<DropdownButton nav>
						<span>Dropdown </span><Caret/>
					</DropdownButton>
					<Menu>
						<MenuItem href='#'>Action</MenuItem>
						<MenuItem href='#'>Another Action</MenuItem>
						<MenuItem href='#'>Something else here</MenuItem>
						<MenuItem divider></MenuItem>
						<MenuItem href='#'>Separated link</MenuItem>
					</Menu>
				</NavItem>
			</Nav>
			<Nav right>
				<NavItem href='#'>Link 3</NavItem>
				<NavItem dropdown>
					<DropdownButton nav>
						<span>Dropdown </span><Caret/>
					</DropdownButton>
					<Menu>
						<MenuItem href='#'>Action</MenuItem>
						<MenuItem href='#'>Another Action</MenuItem>
						<MenuItem href='#'>Something else here</MenuItem>
						<MenuItem divider></MenuItem>
						<MenuItem href='#'>Separated link</MenuItem>
					</Menu>
				</NavItem>
			</Nav>
		</NavContent>
	</Container>
</NavBar>