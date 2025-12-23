import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseURL, endpoints } from '../../Config/apis'
type IState={
    loading:boolean,
    follow:boolean,
    loginremainingtime:number,
    forgetpasswordremainingtime:number,
    otpremaingtime:number,
    data:{
        user:{
        UID:string,
        coins:number,
        createdAt: string,
        email: string,
        isVerfied:boolean,
        name:string,
        avatar:string,
        isReferred:string,
        emoji:string,
        fcmtoken:string
        }
    },
    signup:{
        name:string,
        email:string,
        password:string
    },
    open:boolean,
    open1:boolean,
    loginopen:boolean,
    step:number,
    cachetoken:null | string | undefined,
    supportflag:boolean,
    cacheIsNotify:boolean

}
const initialState:IState = {
    signup:{
        name:'',
        email:'',
        password:''
    },
   
    loginremainingtime:0,
    forgetpasswordremainingtime:0,
    otpremaingtime:0,
    follow:false,
    cacheIsNotify:false,
    loading: false,
    loginopen:false,
    step:0,
    open:false,
    open1:false,
    cachetoken:null,
    supportflag:false,
    data:{
        user:{
        UID: '',
        fcmtoken:'',
        coins: 0,
        createdAt: '',
        email: '',
        isVerfied: false,
        name: '',
        avatar:'',
        isReferred:'',
        emoji:''
        }
    }
}
export const SignUp = createAsyncThunk("Signup", async (payload: { data: Object }, { fulfillWithValue, rejectWithValue }) => {
    try {
        const { data } = payload
        const response = await fetch(`${baseURL}/${endpoints.signup}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        return fulfillWithValue(result)

    }
    catch (error) {
        return rejectWithValue(error)
    }
})

export const OTPVerify = createAsyncThunk("OTPVerify", async (payload: { data: Object }, { fulfillWithValue, rejectWithValue }) => {
    try {
        const { data } = payload
        const response = await fetch(`${baseURL}/${endpoints.otpverify}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        return fulfillWithValue(result)
    }
    catch (error) {
        return rejectWithValue({ message: 'Access temporarily blocked.'})
    }
})

export const Login123 = createAsyncThunk("Login", async (payload: { data: Object }, { fulfillWithValue, rejectWithValue }) => {
    try {
        const { data } = payload
        const response = await fetch(`${baseURL}/${endpoints.login}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
 
        return fulfillWithValue(result)
    }
    catch (err:any) {
      
        return rejectWithValue({ message: 'Access temporarily blocked.'});
    }
    
})


export const Profile = createAsyncThunk("Profile", async (__, { fulfillWithValue, rejectWithValue }) => {
    try {
     
        const token=localStorage.getItem('token') || ''
        const response = await fetch(`${baseURL}/${endpoints.profile}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                token:token
            } as {},
        })
        const result = await response.json()
        return fulfillWithValue(result)
    }
    catch (error) {
        return rejectWithValue(error)
    }
})

export const UpdateProfile = createAsyncThunk("UpdateProfile", async (payload: { data: Object }, { fulfillWithValue, rejectWithValue,dispatch }) => {
    try {
        const { data } = payload
        const token=localStorage.getItem('token') || ''
        const response = await fetch(`${baseURL}/${endpoints.updateProfile}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                 token:token
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        if(result){
            dispatch(Profile())
        }
        return fulfillWithValue(result)
    }
    catch (error) {
        return rejectWithValue(error)
    }
})
export const FireBaseSignUp = createAsyncThunk("FireBaseSignUp", async (payload: { data: Object }, { fulfillWithValue, rejectWithValue }) => {
    try {
        const { data } = payload
        const response = await fetch(`${baseURL}/${endpoints.firebaseAuth}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
      
        return fulfillWithValue(result)

    }
    catch (error) {
        return rejectWithValue(error)
    }
})
export const ResendOTP = createAsyncThunk("ResendOTP", async (payload: { data: Object }, { fulfillWithValue, rejectWithValue }) => {
    try {
        const { data } = payload
        const response = await fetch(`${baseURL}/${endpoints.resend_otp}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
    
       
        return fulfillWithValue(result)
    }
    catch (error) {
      
        return rejectWithValue({ message:'Access temporarily blocked.'})
    }
})

export const NotifyEmail = createAsyncThunk("NotifyEmail", async (payload: { data: Object }, { fulfillWithValue, rejectWithValue }) => {
    try {
        const { data } = payload
        const response = await fetch(`${baseURL}/${endpoints.notifyemail}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                token:localStorage.getItem('token') ||''
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        return fulfillWithValue(result)
    }
    catch (error) {

        return rejectWithValue(error)
    }
})

export const BeforeLoginNotifyEmail = createAsyncThunk("BeforeLoginNotifyEmail", async (payload: { data: Object }, { fulfillWithValue, rejectWithValue }) => {
    try {
        const { data } = payload
        const response = await fetch(`${baseURL}/${endpoints.before_login_notiyemail}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                token:localStorage.getItem('token') ||''
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        return fulfillWithValue(result)
    }
    catch (error) {

        return rejectWithValue(error)
    }
})

export const ReferalCode = createAsyncThunk("ReferalCode", async (payload: { data: Object }, { fulfillWithValue, rejectWithValue}) => {
    try {
        const { data } = payload
        const token=localStorage.getItem('token') || ''
        const response = await fetch(`${baseURL}/${endpoints.referalcode}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                token:token
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
      
        return fulfillWithValue(result)
    }
    catch (error) {
        return rejectWithValue(error)
    }
})

export const ChangePassword = createAsyncThunk("ChangePassword", async (payload: { data: Object }, { fulfillWithValue, rejectWithValue }) => {
    try {
        const { data } = payload
        const response = await fetch(`${baseURL}/${endpoints.changePassword}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        return fulfillWithValue(result)
    }
    catch (error) {
        return rejectWithValue(error)
    }
})


export const BlogReaction = createAsyncThunk(
  "BlogReaction",
  async (payload: { data:Object }, { fulfillWithValue, rejectWithValue }) => {
    try {
     const {data}=payload
     const token=localStorage.getItem('token') || ''
      const response = await fetch(`${baseURL}/${endpoints.blog_reaction}`, {
        method: "PATCH",
        headers: { 
            "Content-Type": "application/json" ,
            token:token
        },
        body: JSON.stringify(data), // directly send { userid, emoji }
      });

      const result = await response.json();
      return fulfillWithValue(result);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);






const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setCoinsSteps:(state,action)=>{
        state.step=action.payload
      },
      setFollow:(state,action)=>{
        state.follow=action.payload
      },
      setIsNotify:(state,action)=>{
        state.cacheIsNotify=action.payload
      },
      setSupportflag:(state,action)=>{
        state.supportflag=action.payload
      },
      setOpen:(state,action)=>{
        state.open=action.payload
      },
      setOpen1:(state,action)=>{
        state.open1=action.payload
      },
      addCoins: (state, action) => {
        state.data.user.coins += action.payload;
      },
      setLoginOpen:(state,action)=>{
        state.loginopen=action.payload
      },
      setToken:(state,action)=>{
        state.cachetoken=action.payload
      },
      logout: (state) => {
        state.data.user = {
          UID: '',
          coins: 0,
          fcmtoken:'',
          createdAt: '',
          email: '',
          isVerfied: false || true,
          name: '',
          avatar: '',
          isReferred:'',
          emoji:''
        }
        state.step = 0
        state.loading = false
      },
      SignUpData:(state,action)=>{
        state.signup=action.payload

      },
      SetLoginRemaingTime:(state,action)=>{
       state.loginremainingtime=action.payload
      },
      SetForgetPasswordRemaingTime:(state,action)=>{
        state.forgetpasswordremainingtime=action.payload
       },
       SetOtpRemaingTime:(state,action)=>{
        state.otpremaingtime=action.payload
    }
    },
    extraReducers: (builder) => {
        //signup
        builder.addCase(SignUp.pending, (state) => {
            state.loading = true
        })
        
        builder.addCase(SignUp.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(SignUp.rejected, (state) => {
            state.loading = false
        })

        //otpverify
        builder.addCase(OTPVerify.pending, (state) => {
            state.loading = true
        })
        builder.addCase(OTPVerify.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(OTPVerify.rejected, (state) => {
            state.loading = false
        })

        //login
        builder.addCase(Login123.pending, (state) => {
            state.loading = true
        })
        builder.addCase(Login123.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(Login123.rejected, (state) => {
            state.loading = false
        })

        //updateprofile
        builder.addCase(UpdateProfile.pending, (state) => {
            state.loading = true
        })
        builder.addCase(UpdateProfile.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(UpdateProfile.rejected, (state) => {
            state.loading = false
        })

        //profile
        builder.addCase(Profile.pending, (state) => {
            state.loading = true
        })
        builder.addCase(Profile.fulfilled, (state,action) => {
            state.loading = false
            state.data=action.payload
        })
        builder.addCase(Profile.rejected, (state) => {
            state.loading = false
        })

        //notifyemail
        builder.addCase(NotifyEmail.pending, (state) => {
            state.loading = true
        })
        builder.addCase(NotifyEmail.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(NotifyEmail.rejected, (state) => {
            state.loading = false
        })
       //beforelogin_notify_email
        builder.addCase(BeforeLoginNotifyEmail.pending, (state) => {
            state.loading = true
        })
        builder.addCase(BeforeLoginNotifyEmail.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(BeforeLoginNotifyEmail.rejected, (state) => {
            state.loading = false
        })
        //referalcode
        builder.addCase(ReferalCode.pending, (state) => {
            state.loading = true
        })
        builder.addCase(ReferalCode.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(ReferalCode.rejected, (state) => {
            state.loading = false
        })

        //resendOTP
        builder.addCase(ResendOTP.pending, (state) => {
            state.loading = true
        })
        builder.addCase(ResendOTP.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(ResendOTP.rejected, (state) => {
            state.loading = false
        })

        //changepassword
        builder.addCase(ChangePassword.pending, (state) => {
            state.loading = true
        })
        builder.addCase(ChangePassword.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(ChangePassword.rejected, (state) => {
            state.loading = false
        })
       
        //FireBaseAuth
        builder.addCase(FireBaseSignUp.pending, (state) => {
            state.loading = true
        })
        builder.addCase(FireBaseSignUp.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(FireBaseSignUp.rejected, (state) => {
            state.loading = false
        })

        builder.addCase(BlogReaction.pending, (state) => {
           state.loading = true;
        })
        builder.addCase(BlogReaction.fulfilled, (state ) => {
        state.loading = false;
       })
        builder.addCase(BlogReaction.rejected, (state) => {
        state.loading = false;
        })


    }})
export const { SetLoginRemaingTime,SetForgetPasswordRemaingTime,SetOtpRemaingTime,setCoinsSteps,setSupportflag,logout,setFollow,setOpen,setOpen1,setIsNotify,addCoins,SignUpData,setLoginOpen,setToken}=AuthSlice.actions
export default AuthSlice.reducer
