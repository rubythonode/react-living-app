import React from 'react';
import Select from 'react-select';

const STATES = require('../data/states');

var StatesField = React.createClass({
	displayName: 'StatesField',
	propTypes: {
		label: React.PropTypes.string,
		searchable: React.PropTypes.bool,
	},
	getDefaultProps () {
		return {
			label: 'States:',
			searchable: true,
		};
	},
	getInitialState () {
		return {
			country: 'AU',
			disabled: false,
			searchable: this.props.searchable,
			selectValue: 'Pick a Region and Search!',
			clearable: true,
		};
	},
	switchCountry (e) {
		var newCountry = e.target.value;
		console.log('Country changed to ' + newCountry);
		this.setState({
			country: newCountry,
			selectValue: null
		});
	},
	updateValue (newValue) {
		console.log('State changed to ' + newValue);
		this.setState({
			selectValue: newValue
		});
		this.props.onChange(newValue);
	},
	focusStateSelect () {
		this.refs.stateSelect.focus();
	},
	toggleCheckbox (e) {
		let newState = {};
		newState[e.target.name] = e.target.checked;
		this.setState(newState);
	},
	render () {
		var options = STATES[this.state.country];
		return (
			<div className="section">
				<Select ref="stateSelect" autofocus options={options} simpleValue clearable={this.state.clearable} name="selected-state" disabled={this.state.disabled} value={this.state.selectValue} onChange={this.updateValue} searchable={this.state.searchable} />

				<div className="checkbox-list">
					<label className="checkbox">
						<input type="radio" className="checkbox-control" checked={this.state.country === 'US'} value="US" onChange={this.switchCountry}/>
						<span className="checkbox-label">United States & Mexico</span>
					</label>
					<label className="checkbox">
						<input type="radio" className="checkbox-control" checked={this.state.country === 'CA'} value="CA" onChange={this.switchCountry}/>
						<span className="checkbox-label">Canada</span>
					</label>
					<label className="checkbox">
						<input type="radio" className="checkbox-control" checked={this.state.country === 'SOUTH_AMERICA'} value="SOUTH_AMERICA" onChange={this.switchCountry}/>
						<span className="checkbox-label">South America</span>
					</label>
					<label className="checkbox">
						<input type="radio" className="checkbox-control" checked={this.state.country === 'EUROPE'} value="EUROPE" onChange={this.switchCountry}/>
						<span className="checkbox-label">Europe</span>
					</label>
				</div>
			</div>
		);
	}
});


module.exports = StatesField;

	// <h3 className="section-heading">{this.props.label}</h3>

// <div style={{ marginTop: 14 }}>
// 					<button type="button" onClick={this.focusStateSelect}>Focus Select</button>
// 					<label className="checkbox" style={{ marginLeft: 10 }}>
// 						<input type="checkbox" className="checkbox-control" name="searchable" checked={this.state.searchable} onChange={this.toggleCheckbox}/>
// 						<span className="checkbox-label">Searchable</span>
// 					</label>
// 					<label className="checkbox" style={{ marginLeft: 10 }}>
// 						<input type="checkbox" className="checkbox-control" name="disabled" checked={this.state.disabled} onChange={this.toggleCheckbox}/>
// 						<span className="checkbox-label">Disabled</span>
// 					</label>
// 					<label className="checkbox" style={{ marginLeft: 10 }}>
// 						<input type="checkbox" className="checkbox-control" name="clearable" checked={this.state.clearable} onChange={this.toggleCheckbox}/>
// 						<span className="checkbox-label">Clearable</span>
// 					</label>
// 				</div>