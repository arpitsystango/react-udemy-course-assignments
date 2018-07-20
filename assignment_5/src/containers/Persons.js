import React, { Component } from 'react';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={this.props.personDeletedHandler.bind(this, person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    persons: state.persons.persons
});

const mapDispatchToProps = (dispatch) => ({
    personAddedHandler: (name, age) => dispatch({ type: actionTypes.PERSON_ADDED, name, age }),
    personDeletedHandler: (id) => dispatch({ type: actionTypes.PERSON_DELETED, id })
});

export default connect(mapStateToProps, mapDispatchToProps)(Persons);