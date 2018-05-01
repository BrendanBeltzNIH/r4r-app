import React from 'react';
import PropTypes from 'prop-types';
import { Theme } from '../theme';
import {
    keyHandler,
} from '../utilities';

class SelectedFiltersBox extends React.PureComponent {
    static propTypes = {
        selected: PropTypes.array.isRequired, //TODO: More granular type definition here
        toggleFilter: PropTypes.func.isRequired,
        clearFilters: PropTypes.func.isRequired,
    }

    render(){
        if(!this.props.selected.length){
            return null;
        }

        return (
            <Theme element="section" className="results__selected-filters" aria-label="Selected Search Filters">
                {
                    this.props.selected.length
                    ?
                        <React.Fragment>
                            <Theme element="h4" className="selected-filters__header" aria-hidden>Your selections:</Theme>
                            <Theme element="div" className="selected-filters__filters-container">
                            {
                                this.props.selected.map((filter, idx) => (
                                    <Theme
                                        element="div" 
                                        key={ idx }
                                        className="selected-filters__filter"
                                        tabIndex="0"
                                        onClick={ this.props.toggleFilter(filter.param)(filter.key) }
                                        onKeyPress={ keyHandler({
                                            fn: this.props.toggleFilter(filter.param)(filter.key),
                                        })}
                                    >
                                        <p>{`${filter.title}: `} <span>{filter.label}</span> X</p>
                                    </Theme>
                                ))
                            }
                            {
                                (this.props.selected.length > 1) &&
                                    <Theme
                                        element="div"
                                        tabIndex="0"
                                        className="selected-filters__filter selected-filters__clear"
                                        onClick={ this.props.clearFilters }
                                        onKeyPress={ keyHandler({
                                            fn: this.props.clearFilters,
                                        })}
                                    >
                                        <p>Clear all</p>
                                    </Theme>
                            }
                            </Theme>
                        </React.Fragment>
                    :
                        null
                }
            </Theme>
        )

    }
}

export default SelectedFiltersBox;