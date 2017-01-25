import React from 'react';
import {DayRepository} from './DayRepository.js';
import {Table} from 'antd';
import {Link} from 'react-router';
export class DreamTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'Date',
        dataIndex:'date',
        key:'date'
      },
      {
        title:'Action',
        key:'action',
        render: (text, record) => (
          <Link to={"/dream/"+record._id}>Edit</Link>
        )
        
      }]
    this.rep = new DayRepository();
    this.state = {date: [{key: 1, day:'2017-25-02'}] }

  }

  componentDidMount() {
    this.rep.getDays(days => {
      days = days.map((d) => {
        d.key = d._id
        return d;
      })
      this.setState({days: days});
    })
  }
  render(){
    return <Table dataSource={this.state.days} columns={this.columns} />
  }
}
