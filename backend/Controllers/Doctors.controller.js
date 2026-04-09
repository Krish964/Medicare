import doctors from "../Doctors/Doctors.js";

export const getDoctors = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: doctors.length,
      doctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while fetching doctors",
      error: error.message,
    });
  }
};