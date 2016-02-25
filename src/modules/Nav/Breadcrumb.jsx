import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import css from './Breadcrumb.less';

export const Breadcrumb = React.createClass({
	mixins: [PureRenderMixin],
	render: function () {
		return (
			<ul className="list-unstyled Breadcrumb">
					{this.props.items.map(entry =>
					<li key={entry} className="Breadcrumb-item">
						{entry}
						<span className="Breadcrumb-separator fa fa-angle-right"></span>
					</li>
				)}
			</ul>
		);
	}
});
