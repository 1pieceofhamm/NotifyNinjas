import React, { useState } from 'react';

const NotificationForm = () => {
  const [notification, setNotification] = useState({
    color: '',
    time: '',
    name: '',
    sound: '',
    shape: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNotification(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can do something with the notification object, such as send it to a server or display it on the page
  }
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
    <form onSubmit={handleSubmit}>
        <label>
        Name:
        <input type="text" name="name" value={notification.name} onChange={handleInputChange} />
      </label>
      <label>
  Time:
  <input type="time" name="time" value={notification.time} onChange={handleInputChange} />
</label>
<label>
  Schedule:
  <select name="schedule" value={notification.schedule} onChange={handleInputChange}>
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
      <label>
        Color:
        <select name="color" value={notification.color} onChange={handleInputChange}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
        </select>
    </label>
    <label>
        Shape:
        <select name="shape" value={notification.shape} onChange={handleInputChange}>
            <option value="square">Square</option>
            <option value="circle">Circle</option>
            <option value="triangle">Triangle</option>
        </select>
        </label>
      <label>
        Sound:
        <select name="sound" value={notification.sound} onChange={handleInputChange}>
            <option value="bell">Bell</option>
            <option value="horn">Horn</option>
            <option value="whistle">Whistle</option>
        </select>
        </label>
      <button type="submit">Create Notification</button>
    </form>
  );
}

export default NotificationForm;
