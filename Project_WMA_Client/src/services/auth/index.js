import apiAuth from "../../api/auth";
import apiUser from "../../api/user";

const authService = {
    login: async (loginPayload) => {
        try {
            const { accessToken, refreshToken, userId } = await apiAuth.login(loginPayload);
            if (accessToken && refreshToken) {
                return {
                    userInfo: await apiUser.getUserById(userId),
                    accessToken,
                    refreshToken
                }

            }
        } catch (err) {
            throw new Error(err.message)
        }
    },
    renewAccessToken: async (localRefreshToken) => {
        // uncomment code ở dưới để gọi api backend

        const { newAccessToken, userId, newRefreshToken } = await apiAuth.renewAccessToken({ localRefreshToken })
        if (!newAccessToken) {
            throw new Error('Data was empty')
        }
        localStorage.setItem("accessToken", newAccessToken);
        localStorage.setItem("refreshToken", newRefreshToken);
        return {
            userInfo: await apiUser.getUserById(userId),
            accessToken: newAccessToken,
            refreshToken: newRefreshToken
        }

    }
}

export default authService