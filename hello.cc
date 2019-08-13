#include <node.h>
#include <windows.h>

namespace demo
{

    using v8::Exception;
    using v8::FunctionCallbackInfo;
    using v8::Isolate;
    using v8::Local;
    using v8::NewStringType;
    using v8::Number;
    using v8::Object;
    using v8::String;
    using v8::Value;

    void Method(const FunctionCallbackInfo<Value> &args)
    {
        Isolate *isolate = args.GetIsolate();
        if (args.Length() < 7)
        {
            // Throw an Error that is passed back to JavaScript
            isolate->ThrowException(Exception::TypeError(
                String::NewFromUtf8(isolate,
                                    "Wrong number of arguments",
                                    NewStringType::kNormal)
                    .ToLocalChecked()));
            return;
        }
        if (!args[0]->IsNumber() || !args[1]->IsNumber() || !args[2]->IsNumber() || !args[3]->IsNumber() || !args[4]->IsNumber() || !args[5]->IsNumber() || !args[6]->IsNumber())
        {
            isolate->ThrowException(Exception::TypeError(
                String::NewFromUtf8(isolate,
                                    "Wrong arguments",
                                    NewStringType::kNormal)
                    .ToLocalChecked()));
            return;
        }

        SetWindowPos((HWND)(int)args[0].As<Number>()->Value(), (HWND)(int)args[1].As<Number>()->Value(), (int)args[2].As<Number>()->Value(),
                     (int)args[3].As<Number>()->Value(), (int)args[4].As<Number>()->Value(), (int)args[5].As<Number>()->Value(),
                     (UINT)args[6].As<Number>()->Value());
    }

    void Initialize(Local<Object> exports)
    {
        NODE_SET_METHOD(exports, "SetWindowPos", Method);
    }

    NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

} // namespace demo