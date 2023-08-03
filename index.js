import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import _ from 'lodash';
import GetDate from './date.js';
import getSunset from './getSunset.js';

const port = 3000;
const day = GetDate();
const homeCity = "Cebu";
const apiKey = "4e3381b828b592636af25d34259b9cc1";
const units = "metric";
const homeUrl = "https://api.openweathermap.org/data/2.5/weather?";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Cebu&appid=4e3381b828b592636af25d34259b9cc1&units=metric");
        const dataSunset = result.data.sys.sunset;
        const dataTimezone = result.data.timezone;
        const homeSunset = getSunset(dataSunset, dataTimezone);
        res.render("weather.ejs", {
            date: day,
            homeCity: homeCity,
            sunset: homeSunset,
            content: result.data
        });
    } catch (error) {
        console.log(error.response.message);
    }
});

app.post("/", async (req, res) => {
    const city = req.body.cityName;
    try {
        const response = await axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4e3381b828b592636af25d34259b9cc1&units=metric`);
        const dataSunset = response.data.sys.sunset;
        const dataTimezone = response.data.timezone;
        const citySunset = getSunset(dataSunset, dataTimezone);
        res.render("weather.ejs", {
            date: day,
            sunset: citySunset,
            content: response.data
        });
    } catch (error) {
        console.log(error.response.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running at post ${port}`);
});