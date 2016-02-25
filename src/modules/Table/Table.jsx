import React from 'react';

export default React.createClass({
	render: function () {
		return <table className="table-bordered">{this.props.children}</table>;
	}
});
