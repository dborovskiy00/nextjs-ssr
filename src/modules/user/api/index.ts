import ApiService from "@/lib/services/api";

class UserApiService {
  static getAllUsers() {
    return ApiService.get("/users");
  }
}

export default UserApiService;
