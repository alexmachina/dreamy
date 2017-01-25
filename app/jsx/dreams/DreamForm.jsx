import React from 'react';
import {Form, DatePicker, Input, Button} from 'antd';
import moment from 'moment';
import enUS from 'antd/lib/date-picker/locale/en_US';
import {DayRepository} from './DayRepository.js';
const FormItem = Form.Item;

export class DreamForm extends React.Component{
  constructor(props){
    super(props);
    this.rep = new DayRepository();
    this.dateFormat = 'YYYY/MM/DD';

    this.state = {date: '', dream: ''};
  }
  componentDidMount() {
    this.rep.getDay(this.props.params.id,
      day => {this.setState(day)
        console.log(this.state);
      });

  }
  handleSubmit(e){
    e.preventDefault();
  }
  handleDateChange(date, dateString) {
    this.setState({date: dateString});
  }

  handleDreamChange(e) {
    this.setState({dream: e.target.value});
  }
  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <DatePicker selectedValue={} locale={enUS} onChange={this.handleDateChange.bind(this)}/>
        </FormItem>
        <FormItem>
          <Input type="textarea" value={this.state.dream} 
            onChange={this.handleDreamChange.bind(this)} rows="10" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Save</Button>
        </FormItem>
      </Form>
    )
  }
}
