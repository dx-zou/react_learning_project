import React from 'react'
//第一种创建组件的方式
export default function Home(props) {
    return <div className="home-container">
        <h3>this is home component</h3>
        name:{props.name},age:{props.age}
    </div>
}
