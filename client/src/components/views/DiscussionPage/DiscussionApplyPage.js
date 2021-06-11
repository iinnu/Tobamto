import React from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Typography } from 'antd';

const { Title } = Typography;

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

function DiscussionApplyPage(props) {
    return (
    <Formik
      initialValues={{
        title: "",
        content: "",
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().required("신청할 주제를 작성해주세요."),
        content: Yup.string().required("신청 이유를 작성해주세요."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert('주제가 등록되었습니다.');
          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;

        return (
          <div style={{ textAlign: 'center' }}>
            <div className="app">
              <div className="contact">
                <Title level={2} style={{paddingLeft: '40px'}}>토론 주제 신청</Title>
              </div>
              <Form
                style={{ minWidth: "40%" }}
                {...formItemLayout}
                onSubmit={handleSubmit}
              >
                <Form.Item required label="주제">
                  <Input
                    id="title"
                    placeholder="주제를 입력해주세요."
                    type="text"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.title && touched.title
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.title && touched.title && (
                    <div className="input-feedback">{errors.title}</div>
                  )}
                </Form.Item>
                <Form.Item
                  required
                  label="신청 이유"
                  hasFeedback
                  validateStatus={
                    errors.content && touched.content ? "error" : "success"
                  }
                >
                  <Input
                    id="content"
                    placeholder="내용을 입력해주세요."
                    type="textarea"
                    value={values.content}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.content && touched.content
                        ? "text-input error"
                        : "text-input"
                    }
                    style={{ height: '200px' }}
                  />
                  {errors.content && touched.content && (
                    <div className="input-feedback">{errors.content}</div>
                  )}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                  <button
                    className="submitBtn"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    style={{ width: '30%', marginLeft:'-33%', marginTop:'10px'}}
                  >
                    등록
                  </button>
                </Form.Item>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default DiscussionApplyPage