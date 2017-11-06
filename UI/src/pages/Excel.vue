<template>
    <div class="excel__container">

        <div class="excel__content">
            <section class="excel__sections section__load boxShadow" id="section-load" v-bind:class="uploadState">
                <div class="counter">1</div>
                <h2>Upload your file . . .</h2>
                <div class="box">
                    <form id="uploadForm" class="excel__upload-form">
                        <input type="file" name="fileinput" id="fileinput" class="inputfile" v-on:change="uploadFile" data-multiple-caption="{count} files selected" multiple />
                        <label for="fileinput"><figure><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg></figure> <span id="message-load">{{uploadMessage}}</span></label>
                        <loading-indicator v-if="showLoadingIndicator"></loading-indicator>
                    </form>
                </div>
            </section>

            <section class="excel__sections section__validation boxShadow" id="section-processed" v-bind:class="validationState">
                <div class="counter">2</div>
                <h2>Data validation. . .</h2>
                <div class="box" v-if="hasValidationSuccess">
                    <h2>Excelfile data is valid</h2>
                </div>
                <div class="box" v-if="unhadledError">
                    <h2>{{validationMessage}}</h2>
                </div>
                <div class="box" v-if="hasValidationError && !unhadledError">
                    <h2>{{wrongRecords.length}} invalid records of {{records.records.length}}</h2>
                </div>
                <div class="error__records" v-if="hasValidationError && !unhadledError">
                    <div class="error__record" v-for="record in wrongRecords">
                        <div class="error__line">{{record.column_id}}</div>
                        <div class="error__details">
                            <div class="error__detail" v-for="lineError in record.errors">{{lineError.validation_type | translateError}} on {{lineError.validation_fields}}</div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="excel__sections section__export boxShadow" id="section-export">
                <div class="counter">3</div>
                <h2>Download CSV file . . .</h2>
                <div class="box" v-if="uploadState==='success' && !unhadledError">
                    <a v-bind:href="getCSV" download class="button__download">
                        <figure>
                            <svg height="26px" version="1.1" viewBox="0 0 16 16" width="26px" xmlns="http://www.w3.org/2000/svg"><title/><defs/><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="#000000" id="Group" transform="translate(-480.000000, 0.000000)"><path d="M495,11 L495,15 L481,15 L481,11 L480.975342,11 L484,2 L486,2 L486,3 L484.571429,3 L482,11 L494,11 L491.428571,3 L490,3 L490,2 L492,2 L495.00354,11 Z M487,1 L489,1 L489,6 L491,6 L488,10 L485,6 L487,6 Z M486,12 L486,13 L490,13 L490,12 Z M486,12"/></g></g></svg>
                        </figure>
                        <span>Download CSV file</span>
                    </a>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { focus } from 'vue-focus'
import axios from 'axios'
import LoadingIndicator from '@/components/LoadingIndicator'
import Vue from 'vue'

Vue.filter('translateError', function (value) {
  let errors = {
    'minOneFilled': 'One field must be filled',
    'required': 'Field entry is required',
    'email': 'Field entry is not a valid email',
    'phone': 'Field entry is not a valid phone number',
    'weblink': 'Field entry is not a valid link address'
  }

  return errors[value] || value
})

export default {
  name: 'ExcelPage',
  data () {
    return {
      focused: true,
      headline: 'Import',
      uploadState: '',
      uploadMessage: 'Choose a file ...',
      showLoadingIndicator: false,
      records: [],
      wrongData: [],
      unhadledError: false,
      validationState: '',
      validationMessage: '' // 'Excelfile data is valid'
    }
  },
  components: {
    LoadingIndicator
  },
  computed: {
    hasValidationError: function () {
      return this.validationState === 'error'
    },
    hasValidationSuccess: function () {
      return this.validationState === 'success'
    },
    getCSV: function () {
      return `/api/download/${this.records.file}`
    }
  },
  methods: {
    uploadFile: function () {
      const formData = new FormData()
      const fileselect = document.getElementById('fileinput')
      const formInput = document.getElementById('uploadForm')
      formData.append('excelfile', fileselect.files[ 0 ])

      // reset before upload
      this.showLoadingIndicator = true
      this.unhadledError = false
      this.records = []
      this.wrongRecords = []
      this.uploadState = ''
      this.validationState = ''
      this.validationMessage = ''
      this.uploadMessage = `Uploading file ${fileselect.files[0].name}`

      axios.post('/api/upload', formData).then(response => {
        try {
          this.uploadState = 'success'
          this.records = response.data
          this.uploadMessage = 'Upload successful'
          this.validateData()
        } catch (err) {
          console.log(err)
          this.unhadledError = true
          this.validationState = 'error'
          this.validationMessage = 'Unhadled error'
        }
        formInput.reset()
        this.showLoadingIndicator = false
      }).catch(err => {
        this.uploadState = 'error'
        this.uploadMessage = `${err.response.data.message || 'Wrong file'} ${fileselect.files[0].name}`
        formInput.reset()
        this.showLoadingIndicator = false
      })
    },
    validateData: function () {
      this.wrongRecords = this.records.records.filter(value => {
        return value.errors.length > 0
      })

      if (this.wrongRecords.length > 0) {
        this.validationState = 'error'
      } else {
        this.validationState = 'success'
      }
    }
  },
  directives: {
    focus
  }
}
</script>

<style lang="postcss" scoped>
@import '../assets/css/db-settings.css';

.excel {
    &__container {
        order: 0;
        flex: 1 1 auto;
        align-self: auto;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;
        align-items: stretch;
        padding: 2rem var(--content-space-right) 1rem var(--content-space-left);
    }

    &__header {
        order: 0;
        flex: 0 1 auto;
        align-self: auto;
    }

    &__headline {
        margin: 0;
    }

    &__content {
        order: 1;
        flex: 1 1 auto;
        align-self: auto;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;
        align-items: stretch;
    }

    &__upload-form {
        margin-top: -1em;
        .loader {
            padding: 0 0 1em 0;
        }
    }

    &__sections {
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        order: 0;
        flex: 0 1 auto;
        align-self: auto;
        min-height: 150px;
        margin: 20px 0;
        padding: 16px;

        h2 {
            margin: 0 0 1em 0;
            font: var(--db-font-regular);
            font-weight: 500;
            color: rgb(134, 134, 134);
        }

        .counter {
            position: absolute;
            font: var(--db-font-regular);
            font-size: 200px;
            font-weight: 700;
            color: rgba( 220, 220, 220, .3);
            right: -20px;
            top: -50px;
        }

        &.success {
            background-color: rgb(110, 180, 80);

            h2 {
                color: rgba(255, 255, 255, .8);
            }

            .inputfile {
                & + label {
                    color: rgb(255, 255, 255);

                    figure {
                        border-color: rgb(255, 255, 255);
                    }

                    svg {
                        fill: rgb(255, 255, 255);
                    }
                }
            }
        }

        &.error {
            background-color: var(--db-color-red);

            h2 {
                color: rgba(255, 255, 255, .8);
            }

            .inputfile {
                & + label {
                    color: rgb(255, 255, 255);

                    figure {
                        border-color: rgb(255, 255, 255);
                    }

                    svg {
                        fill: rgb(255, 255, 255);
                    }
                }
            }
        }
    }
}

.error {
    &__records {

    }

    &__record {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;
        align-items: flex-start;
        padding: 0 0 10px 0;
        color: var(--db-color-white);
        border-bottom: 1px solid var(--db-color-01-01);
        margin: 10px 0;

        &:last-child {
            border-bottom: none;
        }
    }

    &__line {
        order: 0;
        flex: 0 1 auto;
        align-self: auto;
        min-width: 80px;
    }

    &__details {
        order: 0;
        flex: 1 1 auto;
        align-self: auto;
    }
}

.section {
    &__validation {
        flex: 1 1 auto;
    }
}

/* shadow effects */
.boxShadow {
    position:relative;
    background:#FFF;
    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

    &:before, &:after {
        content:"";
        position:absolute;
        z-index:-1;
        box-shadow:0 0 10px rgba(0, 0, 0, 0.2);
        top:10px;
        bottom:10px;
        left:0;
        right:0;
        border-radius: 10px;
    }

    &:after {
        right:10px;
        left:auto;
        transform:skew(8deg) rotate(3deg);
    }
}

/* input file form element */
.box {
    text-align: center;
}

.table-box {
    overflow: scroll;
    background-color: rgba(255, 255, 255, .85);
}

.inputfile {
    width: 0.1px;
    height: 0.1px;
    font: var(--db-font-regular);
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    outline: 0;

    & + label {
        max-width: 80%;
        font: var(--db-font-regular);
        font-size: 16px;
        font-weight: 700;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
        display: inline-block;
        overflow: hidden;
        padding: 0.625rem 1.25rem;
        /* 10px 20px */

        color: var(--db-color-blue);

        figure {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            border: 2px solid var(--db-color-blue);
            display: block;
            padding: 20px;
            margin: 0 auto 10px;
        }

        svg {
            width: .5em;
            height: .5em;
            vertical-align: middle;
            fill: #fff;
            margin-top: -0.25em;
            margin-right: 0.25em;

            width: 100%;
            height: 100%;
            fill: var(--db-color-blue);
        }
    }

    &:focus + label {
        color: var(--db-color-blue);
        outline: 0;
    }
}

.button {
    &__download {
        max-width: 80%;
        font: var(--db-font-regular);
        font-size: 16px;
        font-weight: 700;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
        display: inline-block;
        overflow: hidden;
        padding: 0.625rem 1.25rem;
        text-decoration: none;
        color: var(--db-color-blue);

        figure {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            border: 2px solid var(--db-color-blue);
            display: block;
            padding: 20px;
            margin: 0 auto 10px;
        }

        svg {
            vertical-align: middle;
            margin-top: -0.25em;
            margin-right: 0.25em;
            width: 100%;
            height: 100%;
            #Group {
                fill: var(--db-color-blue);
            }

        }
    }
}


</style>
