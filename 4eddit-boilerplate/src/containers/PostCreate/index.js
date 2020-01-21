import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import styled from "styled-components";
import { routes } from "../Router/index";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { createPost } from "../../actions/";


const Create = styled.form`
 display: flex;
 flex-direction: column;
`;


class PostCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlePostButton = () =>{
    this.props.create(this.state.text, this.state.title)
  }

  render() {
    const { text, title } = this.state;

    return (
      
        
      <Create>
      
        <TextField
          onChange={this.handleFieldChange}
          name="title"
          type="text"
          label="title"
          value={title}
        />
        <TextField
          onChange={this.handleFieldChange}
          name="text"
          type="text"
          label="Texto"
          value={text}
        />

        <Button onClick={this.handlePostButton}>Enviar</Button>
      </Create>
    );
  }
}

const mapDispatchToProps = (dispatch) =>({
    create:(text, title)=> dispatch(createPost(text, title))
})

export default connect(
  null,
  mapDispatchToProps
)(PostCreate);