import axios from 'axios';
import { useState } from 'react'
import './AddProduct.css'
import { useNavigate } from 'react-router-dom';
import imageConversion from 'image-conversion';


const AddProduct = () => {
  const navigate = useNavigate();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [size, setSize] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const [imageSrc, setImageSrc] = useState('src/assets/food-no-image2.png');

    const handleImageChange = async (e) => {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        // Compress the image if its size is more than 10MB
        const compressedImage = await imageConversion.compressAccurately(file, {
          size: 10,
          accuracy: 0.6,
        });
        setImageUrl(compressedImage);
      } else {
        setImageUrl(file);
      }
      setImageSrc(URL.createObjectURL(file));
    };

  const handleCameraClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment';
    input.onchange = handleImageChange;
    input.click();
  };

  
    const handleSubmit = async (event) => {
      event.preventDefault();

    const token = localStorage.getItem("jwtToken");
    console.log(token);
      try {
        const response = await axios.post('http://localhost:8081/api/v1/products/vendor/add', {
        name,
        category,
        size,
        price
        },
        {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
        );

        // Handle the response from the server
        if (response.status ===  200) {
          alert('Product added successfully!');
          // Reset the form fields
          setImageUrl('');
          setName('');
          setCategory('');
          setSize('');
          setPrice('');
          setTimeout(() => {
            navigate("/admin-dashboard");
          }, 1000);
        } else {
          alert('Failed to add product. Please try again.');
        }
      } catch (error) {
        console.error('Error adding product:', error);
        alert('An error occurred while adding the product.');
      }
    };
   
  
    return (
      <div className='add-product'>
        <div className="order-successful-modal-Nbu">
          <img className="auto-group-6u63-6H1" src="src/assets/Frame 38813503.png" alt="add product icon" />
           <p className="order-delivered-successful-pTu">New Dish</p>
          <div className='form-part'>
            <div>
              <img className="auto-group-6u63-6H2" src={imageSrc} alt="product image" />
              <img className='camera' src="../src/assets/camera.png" alt="camera" onClick={handleCameraClick} />
            </div>
                <form className='formmy' onSubmit={handleSubmit}>
                  <label className='dish-label' htmlFor="dish">Dish</label>
                  <div className="input-group1">
                    <span className="lock-icon">
                      <img src="src/assets/im/Food.png" alt="lock" />
                    </span>
                    <input 
                    type="text" 
                    id="dish" 
                    name="dish"
                    onChange={(e)=>setName(e.target.value)} 
                    required />
                  </div>
        
                  <label className='category-label' htmlFor="dish-category">Dish category</label>
                  <div className="custom-dropdown">
                    <div className="input-group2">
                      <span className="lock-icon">
                        <img src="src/assets/soup-2.png" alt="lock" />
                      </span>
                      <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                      >
                        <option id='cat-desc' value="">Select a category</option>
                        <option id='cat-1' value="RAW">Raw</option>
                        <option id='cat-2' value="SOUPS_STEWS">Soups and Stews</option>
                        <option id='cat-3' value="RICE_DISHES">Rice dishes</option>
                        <option id='cat-4' value="GRILLED_ROASTED">Grilled and Roasted Protein</option>
                      </select>
                    </div>
                  </div>

                  <label className='size-label' htmlFor="measurement">Measurement/Size</label>
                  <div className="input-group3">
                    <span className="lock-icon">
                      <img src="src/assets/im/weight scale.png" alt="measurement" />
                    </span>
                    <input 
                    type="text" 
                    id="size" 
                    name="size" 
                    onChange={(e) => setSize(e.target.value)}
                    required />
                  </div>
                  
                  <label className='price-label' htmlFor="price">Price</label>
                  <div className="input-group4">
                    <span className="lock-icon">
                      <img src="src/assets/im/tag-2.png" alt="price" />
                    </span>
                    <input 
                    type="text" 
                    id="price" 
                    name="price" 
                    onChange={(e) =>setPrice(e.target.value)}
                    required />
                  </div>
              
    
              <div className="buttons-qBH">
                <button className="button-BF9">Cancel</button>
                <button className="button-fAK">Upload Dish</button>
              </div>
            </form>
          
        </div>
      </div>
      </div>
    );
  }

export default AddProduct