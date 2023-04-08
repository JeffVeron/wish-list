import "./App.css";
import { useState} from "react";
import { CheckSquareOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import React, { useRef } from "react";

export const DataJson = {
  title: "Wish List  Data",
  description:
    "This is a list of the wish list data that is stored loally with the app",
  items: [
    {
      name: "Books",
      description: "Books to be read in times  of leisure and idleness",
      source: "Any Market",
    },
    {
      name: "Mobile Phone ",
      description: "A new and latest Android phone to be used for daily runs",
      source: "Any Market",
    },
    {
      name: "Office chair",
      description:
        "A new and ergonomic office chair that will help me to sit and write for longer periods of time without fatigue ",
      source: "Any Market",
    },
    {
      name: "High-Quality Mattress ",
      description:
        "A high-quality mattress is essential for a good night's sleep, and people may put one on their wish list to upgrade their current sleeping arrangements. ",
      source: "Amazon",
    },
    {
      name: "Home Gym Equipment",
      description:
        " With the rise of at-home workouts, people may put home gym equipment like a Peloton bike or TRX suspension trainer on their wish list to upgrade their fitness routine",
      source: "Amazon",
    },
    {
      name: "Gaming Laptop ",
      description:
        " For gamers, a high-performance gaming laptop is essential for smooth gameplay and high-quality graphics",
      source: "Alienware ,Razer",
    },
    {
      name: "High-End Headphone",
      description:
        "For music lovers, high-end headphones provide a superior audio experience with high-quality sound and noise-cancelling features",
      source: "Amazon or Jumia ",
    },
    {
      name: " Drone",
      description:
        "For photography enthusiasts, a drone is a way to capture stunning aerial footage and photos ",
      source: "Amazon ",
    },
    {
      name: "Yoga Mat",
      description:
        " A good quality yoga mat is a must-have for anyone who enjoys practicing yoga. It provides a comfortable and supportive surface to practice on, and can help improve the overall experience",
      source: "Amazon",
    },
  ],
};

function Home() {
  const [showDetailState, setShowDetailsState] = useState(false);

  const handleDetails = () => {
    setShowDetailsState(!showDetailState);
  };

  return (
    <div>
      <div>
        <div className="body">
          <ul className="list">
            {DataJson.items.map((item) => (
              <li key={uuidv4()} onClick={handleDetails}>
                <div>
                  <p>{item.name}</p>{" "}
                  <CheckSquareOutlined className="checkBox" />
                  showDetailState &&
                  <p>Description: {item.description}</p>
                  <p>Source: {item.source}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div>
      <div>
        <h1 className="header">Wish List</h1>
      </div>
    </div>
  );
}

function App() {
  const inputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",

    description: "",
    source: "",
  });

  function Form() {
    const handleSubmit = async (event) => {
      event.preventDefault();
      inputRef.current.focus();
      try {
        DataJson.items.push(formData);

        setFormData({
          name: "",
          description: "",
          source: "",
        });
      } catch (error) {
        alert(error.message);
        console.error(error);
      }
    };

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };

    return (
      // merging the forms to get a Master form
      <div>
        <div className="login-box">
          <h2>Add an Item to the List</h2>

          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input
                ref={inputRef}
                type="text"
                name="name"
                defaultValue={formData.name}
                onChange={handleInputChange}
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="user-box">
              <input
                ref={inputRef}
                type="text"
                name="source"
                value={formData.source}
                onChange={handleInputChange}
              />
              <label htmlFor="source">Source </label>
            </div>

            <div className="user-box">
              <textarea
                className="descriptionBox"
                ref={inputRef}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>
              <label htmlFor="description">Description</label>
            </div>

            <p onClick={handleSubmit}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navigation />
      <Form />
      <Home />
    </div>
  );
}

export default App;
