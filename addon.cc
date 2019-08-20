#include <windows.h>
#define NAPI_EXPERIMENTAL
#include <node_api.h>
#include <string>

namespace setWindowPos
{
    napi_value Method(napi_env env, napi_callback_info args)
    {
        napi_status status;

        size_t argc = 7;
        napi_value argv[7];
        status = napi_get_cb_info(env, args, &argc, argv, NULL, NULL);
        if (status != napi_ok)
        {
            napi_throw_error(env, NULL, "Failed to parse arguments");
        }

        bool loosless;

        uint64_t arg0;
        status = napi_get_value_bigint_uint64(env, argv[0], &arg0, &loosless);
        if (status != napi_ok || !loosless)
        {
            napi_throw_error(env, NULL, "argv[0] should be 64bit bigint");
        }
        HWND hwnd = (HWND) arg0;

        uint64_t arg1;
        status = napi_get_value_bigint_uint64(env, argv[1], &arg1, &loosless);
        if (status != napi_ok || !loosless)
        {
            napi_throw_error(env, NULL, "argv[1] should be 64bit bigint");
        }
        HWND after = (HWND)arg1;

        int32_t intArgs[4];
        for (int i = 0; i < 4; i++)
        {
            status = napi_get_value_int32(env, argv[2 + i], &intArgs[i]);
            if (status != napi_ok)
            {
                napi_throw_error(env, NULL, ("argv[" + std::to_string(2 + i) + "] should be integer").c_str());
            }
        }

        uint32_t flag;
        status = napi_get_value_uint32(env, argv[6], &flag);
        if (status != napi_ok)
        {
            napi_throw_error(env, NULL, "argv[6] should be unsigned integer");
        }

        SetWindowPos(hwnd, after, intArgs[0], intArgs[1], intArgs[2], intArgs[3], flag);
        napi_value nullVal;
        status = napi_create_int32(env, 0, &nullVal);
        return nullVal;
    }

    napi_value init(napi_env env, napi_value exports)
    {
        napi_status status;
        napi_value fn;

        status = napi_create_function(env, nullptr, 0, Method, nullptr, &fn);
        if (status != napi_ok)
            return nullptr;

        status = napi_set_named_property(env, exports, "SetWindowPos", fn);
        if (status != napi_ok)
            return nullptr;
        return exports;
    }

    NAPI_MODULE(NODE_GYP_MODULE_NAME, init)

} // namespace setWindowPos