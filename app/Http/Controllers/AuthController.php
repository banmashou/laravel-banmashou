<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Rules\CodeRule;
use App\Rules\PhoneRule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
	public function login(Request $request)
	{
		Validator::make($request->input(), [
			"mobile" => ['required', new PhoneRule(), Rule::exists('users')]
		])->validate();

		$user = User::where('mobile', $request->mobile)->first();
		if ($user && Hash::check($request->password, $user->password)) {
			return $this->success('登录成功', ['token' => $user->createToken('auth')->plainTextToken, 'user' => $user]);
		}

		throw ValidationException::withMessages(['password' => '密码输入错误']);
		// return '密码错误';
		// $user = User::where('mobile', $request->mobile)->first();
		// if ($user && Hash::check($request->password, $user->password)) {
		// 	return '登录成功';
		// }

		// return $request->input();
	}

	public function register(Request $request, User $user)
	{
		Validator::make($request->input(), [
			'mobile' => ['required', Rule::unique('users')],
			'password' => ['required', 'confirmed'],
			'code' => ['required', new CodeRule()]
			// 'password_confirmation' => ['required']
		])->validate();

		$user->fill($request->input());
		$user->password = Hash::make($request->password);
		$user->save();
		return $this->success('登录成功', ['token' => $user->createToken('auth')->plainTextToken]);
	}
}
