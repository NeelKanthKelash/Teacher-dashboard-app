import axios from 'axios';

export const fetchTeacherData = async () => {
  try {
    const teacherResponse = await axios.get('https://run.mocky.io/v3/51c2419f-0061-4f15-8c97-2f9880368b78');
    const coursesResponse = await axios.get('https://run.mocky.io/v3/ffae912a-5712-4df9-89bb-727e8e1306e4');
    return {
      teacher: teacherResponse.data,
      courses: coursesResponse.data,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { teacher: {}, courses: [] };
  }
};
