import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../../Layouts/AdminLayout';
import { userRequest } from '../../../requestMethods'
import { toast } from 'react-hot-toast';

import './ViewPayroll.scss'

function ViewPayroll() {

    const { id } = useParams()

    const[orderId,setorderId] =  useState("")
    const[itemCode,setitemCode] =  useState("")
    const[single,setsingle] =  useState("")
    const[qty,setqty] =  useState("")
    const[quality,setquality] =  useState("")
    const[damaged,setdamaged] =  useState("")
    const[deduction,setdeduction] =  useState("")
    const[net,setnet] =  useState("")
    const[additional,setadditional] =  useState("")
  


    useEffect(() => {
        userRequest.get('/payroll/' + id)
        .then(res => {
            setorderId(res.data.orderId)
            setitemCode(res.data.itemCode)
            setsingle(res.data.single)
            setqty(res.data.qty)
            setquality(res.data.quality)
            setdamaged(res.data.damaged)
            setdeduction(res.data.deduction)
            setnet(res.data.net)
            setadditional(res.data.additional)
            
        }).catch(err =>{
            toast.error(err.message)
        })
      }, [id])

    return (
        <AdminLayout>
            <div className='payroll'>
            
                <div className='payroll-record-container'><h2>View Payroll Details<hr></hr></h2>
                    <div className = "payroll-details-container">                     
                        <div className='payroll-line'>
                            <span className='payroll-line-info'>Order ID :</span>
                            <span className='payroll-line-info-values'>{orderId}</span>
                        </div>

                        <div className='payroll-line'>
                            <span className='payroll-line-info'>Item Code :</span>
                            <span className='payroll-line-info-values'>{itemCode}</span>
                        </div>
                        
                        <div className='payroll-line'>
                            <span className='payroll-line-info'>Single Unit Price :</span>
                            <span className='payroll-line-info-values'>{single}</span>
                        </div>
                        
                        <div className='payroll-line'>
                            <span className='payroll-line-info'>Ordered Amount :</span>
                            <span className='payroll-line-info-values'>{qty}</span>
                        </div>

                        <div className='payroll-line'>
                            <span className='payroll-line-info'>Quality Units :</span>
                            <span className='payroll-line-info-values'>{quality}</span>
                        </div>

                        <div className='payroll-line'>
                            <span className='payroll-line-info'>Damaged Units :</span>
                            <span className='payroll-line-info-values'>{damaged}</span>
                        </div>

                        <div className='payroll-line'>
                            <span className='payroll-line-info'>Total Deduct Amount :</span>
                            <span className='payroll-line-info-values'>{deduction}</span>
                        </div>

                        <div className='payroll-line'>
                            <span className='payroll-line-info'>Total Payment Amount :</span>
                            <span className='payroll-line-info-values'>{net}</span>
                        </div>

                        <div className='payroll-line'>
                            <span className='payroll-line-info'>Additional Details :</span>
                            <span className='payroll-line-info-values'>{additional}</span>
                        </div>
                        
                    </div> 
                </div>

            </div>
        </AdminLayout>
    )
}

export default ViewPayroll