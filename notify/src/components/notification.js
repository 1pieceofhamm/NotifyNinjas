import React, { useState, useEffect } from 'react';
import ChangeCSS from './ChangeCSS.js';
import 'bootstrap/dist/css/bootstrap.min.css';


const NotificationForm = (props) => {
  const [notification, setNotification] = useState({
    color: '',
    time: '',
    name: '',
    sound: '',
    days:[]
  });

  const [backgroundColor, setBackgroundColor] = useState('white');
  const [isDone, setIsDone] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNotification(prevState => ({ ...prevState, [name]: value }));
  }

  function delayUntilTime(targetTime, callback) {
    
    const currentTime = new Date();
    const hour = Number(targetTime.slice(0,2));
    const minute = Number(targetTime.slice(3,));
    console.log(hour, minute);
    var day = 0;
    if(currentTime.getHours() > hour){
      day = currentTime.getDate() + 1;
    }else if(currentTime.getHours() < hour){
      day = currentTime.getDate();
    }else{ //equal
      day = currentTime.getDate();
    }
    day = Number(day)
    console.log(currentTime.getDate());
    const desiredTime = new Date(2023,3,day,hour, minute,0);
    const delay = desiredTime.getTime() - currentTime.getTime();
    setTimeout(callback, delay);
    console.log(delay, desiredTime.toLocaleString('en-US'), currentTime.toLocaleString('en-US'));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    delayUntilTime(notification.time, function() {
      
    
      const bellSound = new Audio('/bell.mp3');
      bellSound.play();
      const userSelectedColor = formData.color;
      setBackgroundColor(userSelectedColor);
      props.onBackgroundChange(userSelectedColor);
    });
    /*
    setTimeout(() => {
      console.log('Finished!');
      setIsDone(!isDone)
      setBackgroundColor(isDone ? 'blue' : 'green');
      props.onBackgroundChange(isDone ? 'blue' : 'green');
    }, 10);
    */
    //while(isDone){
      
    //}
    // Extract form data
    const formData = {};
    const formElements = event.target.elements;
    for (let i = 0; i < formElements.length; i++) {
      const input = formElements[i];
      if (input.name) {
        formData[input.name] = input.value;
      }
    }
    
  
    // Format form data
    //const formDataDiv = document.createElement("div");
    //formDataDiv.classList.add("form-data");
  
    const title = document.createElement("h2");
    title.textContent = formData.name + " " + formData.time;
    title.style.position = "absolute";
    title.style.top = "50%";
    title.style.left = "50%";
    title.style.transform = "translate(-50%, -50%)";
    title.style.fontSize = '75px';
    document.body.appendChild(title);
  
    /*const list = document.createElement("ul");
    for (const [key, value] of Object.entries(formData)) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${key}:</strong> ${value}`;
      list.appendChild(listItem);
    }
    formDataDiv.appendChild(list);
    */
    //document.body.appendChild(formDataDiv);

    // const [isDone, setIsDone] = useState(false);

    // useEffect(() => {
    //   setTimeout(() => {
    //     setIsDone(true);
    //   }, 30000);
    // }, []);
    // {isDone == true}
    // ChangeCSS();
  };
  
  
  
  const handleDayChange = (event) => {
    const day = event.target.name;
    const isChecked = event.target.checked;
    setNotification(prevState => {
      if (isChecked) {
        // Add the day to the array
        return {
          ...prevState,
          days: [...prevState.days, day]
        };
      } else {
        // Remove the day from the array
        return {
          ...prevState,
          days: prevState.days.filter(d => d !== day)
        };
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{backgroundColor:backgroundColor, height: '100vh'}}>
        <label class="form-group col">
        Name:
        <input type="text"  class="form-control" name="name" placeholder="Notification Name" value={notification.name} onChange={handleInputChange} />
      </label>
      <label class="form-group">
  Time:
  <input type="time" class="form-control" name="time" value={notification.time} onChange={handleInputChange} />
</label>
<label class="form-group col">
  Schedule:
  <select name="schedule" class="form-select" value={notification.schedule} onChange={handleInputChange}>
    <option value="one-time">One-time</option>
    <option value="daily">Daily</option>
    <option value="weekly">Weekly</option>
  </select>
  {notification.schedule === 'weekly' && (
    <fieldset>
      <legend>Days:</legend>
      <label>
        <input type="checkbox" name="monday" checked={notification.days.includes('monday')} onChange={handleDayChange} />
        Monday
      </label>
      <label>
        <input type="checkbox" name="tuesday" checked={notification.days.includes('tuesday')} onChange={handleDayChange} />
        Tuesday
      </label>
      <label>
        <input type="checkbox" name="wednesday" checked={notification.days.includes('wednesday')} onChange={handleDayChange} />
        Wednesday
      </label>
      <label>
        <input type="checkbox" name="thursday" checked={notification.days.includes('thursday')} onChange={handleDayChange} />
        Thursday
      </label>
      <label>
        <input type="checkbox" name="friday" checked={notification.days.includes('friday')} onChange={handleDayChange} />
        Friday
      </label>
      <label>
        <input type="checkbox" name="saturday" checked={notification.days.includes('saturday')} onChange={handleDayChange} />
        Saturday
      </label>
      <label>
        <input type="checkbox" name="sunday" checked={notification.days.includes('sunday')} onChange={handleDayChange} />
        Sunday
      </label>
    </fieldset>
  )}
</label>
      <label class="form-group col">
        Color:
        <select name="color" class="form-select" value={notification.color} onChange={handleInputChange}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
        </select>
    </label>
      <label class="form-group col">
        Sound:
        <select name="sound" class="form-select" value={notification.sound} onChange={handleInputChange}>
            <option value="bell">Bell</option>
            <option value="horn">Horn</option>
            <option value="whistle">Whistle</option>
        </select>
        </label>
      <button type="submit" class="btn btn-primary col">Create Notification</button>
    </form>
  );
}

export default NotificationForm;
