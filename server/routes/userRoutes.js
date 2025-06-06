import express from 'express'
import {  addUserRating, getUserData, getUserCourseProgress,purchaseCourse, updateUserCourseProgress, userEnrolledCourses } from '../controllers/userController.js';

const userRouter = express.Router()

// Get user Data
userRouter.get('/data', getUserData)
userRouter.get('/enrolled-courses', userEnrolledCourses)
userRouter.post('/purchase', purchaseCourse)
userRouter.post('/update-course-progress', updateUserCourseProgress)
userRouter.post('/get-course-progress', getUserCourseProgress)

userRouter.post('/add-rating', addUserRating)

export default userRouter;