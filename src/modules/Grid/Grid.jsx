import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import css from './Grid.less';

export const Grid = React.createClass({
	mixins: [PureRenderMixin],
	getRecords: function () {
		return this.props.records || [];
	},

	getTableHeader: function () {
		const {description} = this.props;
		const gridDescription = description.descriptions.grid.fields;
		var result = [];
		for (var field in gridDescription) {
			result.push(<th key={field} className="Grid-sortHeader">
				{gridDescription[field].label}
				<span className="Grid-sortIndicator fa fa-sort"></span>
			</th>);
		}
		return result;
	},

	getTableRow: function (record) {
		const {description} = this.props;
		const gridDescription = description.descriptions.grid.fields;
		var result = [];
		var primaryKey = 'id';
		for (var field in gridDescription) {
			if (gridDescription[field].isPrimaryKey) {
				primaryKey = field;
			}

			var value = 'x';
			if (field in record && (typeof record[field] === 'string' || typeof record[field] === 'number')) {
				value = record[field];
			}

			result.push(<td key={record.id + field}>{value}</td>);
		}
		return <tr key={record[primaryKey]}>{result}</tr>;
	},

	render: function () {
		;
		return <div className="row">
			{this.props.active ?
				<div className="col-lg-12">
					<table className="Grid table table-striped">
						<thead className="Grid Grid-header">
						<tr>
							{this.getTableHeader()}
						</tr>
						</thead>
						<tbody>

						{this.getRecords().size === 0 || this.props.fetching ?
							<tr>
								<td colSpan="99"
								    className="text-muted text-center">{this.props.fetching ? 'Loading..' : this.props.error ? this.props.error.response.statusText : 'No records'}</td>
							</tr> :
							this.getRecords().map(entry => this.getTableRow(entry))}
						</tbody>
						<tfoot>
						<tr>
							{this.getTableHeader()}
						</tr>
						</tfoot>
					</table>
					<nav>
						<ul className="pagination">
							<li className="page-item disabled">
								<a className="page-link" href="#" aria-label="Previous">
									<span aria-hidden="true">&laquo;</span>
									<span className="sr-only">Previous</span>
								</a>
							</li>
							<li className="page-item active">
								<a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
							</li>
							<li className="page-item"><a className="page-link" href="#">2</a></li>
							<li className="page-item"><a className="page-link" href="#">3</a></li>
							<li className="page-item"><a className="page-link" href="#">4</a></li>
							<li className="page-item"><a className="page-link" href="#">5</a></li>
							<li className="page-item">
								<a className="page-link" href="#" aria-label="Next">
									<span aria-hidden="true">&raquo;</span>
									<span className="sr-only">Next</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
				: ''}
		</div>;
	}
});

Grid.propTypes = {
	//records: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}
