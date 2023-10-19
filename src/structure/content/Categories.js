import React, {useEffect, useState} from "react";
import Category from "../../category/Category";

function Categories() {
    const [categories, setCategories] = useState([]);

    async function fetchCategories() {
        const response = await fetch(`http://localhost:8080/api/v1/categories`, {
            method: "GET",
            credentials: "include",
            headers: {
                'Content-Type': "application/json",
            },
        })
        const categories = await response.json();
        setCategories(categories)
    }

    function removeCategory(id) {
        let updated = categories.filter((activity) => activity.id !== id);
        setCategories(updated);
    }

    useEffect(() => fetchCategories, []);

    return (
        <div className="categories">
            <table id="table-categories">
                <thead>
                <tr>
                    <th>Category</th>
                    <th>Priority</th>
                    <th>Number Of Activities</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
                </thead>
                <tbody>
                {categories.map((category, index) => <Category key={index}
                                                               id={category.id}
                                                               name={category.name}
                                                               priority={category.priority}
                                                               activitiesNumber={category.activitiesNumber}
                                                               removeCategory={removeCategory.bind(this)}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Categories