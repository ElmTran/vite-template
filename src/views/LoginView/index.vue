<template>
    <div class="container">
        <div class="login_box">
            <div class="avatar">
                <img src="@/assets/images/avatar.png" alt="avatar">
            </div>
            <el-form label-width="0px" class="login-form" :model="user" :rules="rules" ref="userRef">
                <el-form-item prop="username">
                    <el-input :prefix-icon="UserFilled" v-model="user.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input :prefix-icon="Lock" v-model="user.password" type="password"></el-input>
                </el-form-item>
                <el-form-item class="login-btn">
                    <el-button type='primary'>Login</el-button>
                </el-form-item>
                <!-- <el-form-item class="forget-btn">
                    <el-button>Forget Password</el-button>
                </el-form-item> -->
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { Lock, UserFilled } from '@element-plus/icons-vue';

const user = reactive({
    username: import.meta.env.ADMIN_USERNAME,
    password: import.meta.env.ADMIN_PASSWORD
})
const userRef = ref(null)
const rules = reactive({
    username: [
        { required: true, message: 'Please input username', trigger: 'blur' },
        { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' }
    ],
    password: [
        { required: true, message: 'Please input password', trigger: 'blur' },
        { min: 6, max: 18, message: 'Length should be 6 to 18', trigger: 'blur' }
    ]
})

</script>

<style scoped lang="scss">
.container {
    height: 100%;
    width: 100%;
    background-color: #2d3a4b;
    display: flex;
}

.el-input {
    // 输入框高度
    height: 35px;
    // 边框圆角
    border-radius: 8px;
    box-shadow: 0 0 5px rgb(85, 85, 85);
    // 输入框背景色;
    --el-input-bg-color: #1e252f;
    --el-input-border-color: #38485d;
}

.login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    background-color: #334153;

    .avatar {
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px rgb(130, 33, 33);
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgb(70, 10, 10);

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
}

.login-form {
    width: 250px;
    margin: 0 auto;
    margin-top: 120px;
    padding: auto;
    box-sizing: border-box;

    .el-form-item {
        margin-bottom: 20px;
    }
}

.login-btn {
    margin-left: 35%;
}

.forget-btn {
    margin-left: 90%;
    margin-top: -5%;
}


.el-input__inner {
    background-color: transparent !important;
    border: 1px solid #1296db;
}
</style>