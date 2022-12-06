import React from 'react'


const Record = ({data}) => {
  return (
    <>
      <table className='table'>
        <thead>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'>First Name</th>
                <th scope='col'>Second Name</th>
                <th scope='col'>Email</th>
            </tr>
        </thead>
        <tbody>
            {data?.map(item=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default Record
