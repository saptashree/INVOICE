import React from 'react';
import { Container, Row, Col,Table } from 'reactstrap';
import classes from './invoice.module.css';

function Invoice() {
    return (
        <div>
            
<Row className={classes.part1}>
    <h3>---------INVOICE---------</h3>
</Row>
<Row>
    <Col className={classes.header}>
    <ul style={{listStyleType:"none"}}>
        
    <li><strong>Sony Software</strong></li>
    
    <li>#944/948,4th craoss,9th Main,</li>
    <li>Vijaya Bank Layout, </li>
    <li>Bannerugatta Road, </li>
    <li>Bangalore - 560078</li>
     
    </ul>
    </Col>
    <Col className={classes.header}>
    <ul style={{listStyleType:"none"}}>
        <li><strong>Invoice # :</strong>1</li>
        <li><strong>Invoice Date :</strong> 10-01-2021</li>
        <li><strong>Due Date :</strong> 10-01-2018</li>
    </ul>
    </Col>
</Row>
<Row>
    <Col>
    <ul style={{listStyleType:"none"}}>
        <li>Bill To:<strong>Saptashree V Bennur </strong></li>
        <li>Bannerghatt Road,</li>
        <li>Bangalore - 560076</li>
    </ul>
    </Col>
</Row>
<Row>
    <Col>
    
<Table bordered>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Items</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Speaker</td>
            <td>SRS-XB43/BC IN5</td>
            <td>1</td>
            <td>20,000</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Headphones</td>
            <td>WH1000XM4/BMIN</td>
            <td>2</td>
            <td>25,000</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Tv</td>
            <td>SLS65/MAX</td>
            <td>1</td>
            <td>50,000</td>
          </tr>
        </tbody>
      </Table>
      </Col>
</Row>
<Row>
    <Col>
    <ul style={{listStyleType:"none"}}>
        <li>Totap Price : 1,20,000</li>
    </ul>
    </Col>
</Row>
 
        </div>
    );
}

export default Invoice;
{/* <tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr> */}

