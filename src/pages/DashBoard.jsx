import React from 'react'
import Search from '../components/DashBoard/Search/Search'
import CategoryBar from '../components/DashBoard/CategoryBar/CategoryBar'
import SideBar from '../components/DashBoard/SideBar/SideBar'
import ProductPane from '../components/DashBoard/ProductPane/ProductPane'

const DashBoard = () => {
  return (
    <div>
        <Search />
        <SideBar />
        <CategoryBar />
        <ProductPane />
    </div>
  )
}

export default DashBoard