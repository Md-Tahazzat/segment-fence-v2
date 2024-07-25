<?php 
// Template Name: Contact form
?>
                        <section class="news-letter project-form fadeIn-from-bottom">
                        <div class="common-wrap clear">
                            <div class="news-letter-inner">
                                <h2 class="fadeIn-from-bottom">Suntem aici pentru tine</h2>
                                <p class="fadeIn-from-bottom">Completează formularul de mai jos sau folosește informațiile de
                                    contact pentru a intra în legătură cu echipa noastră.</p>
                                <form id="contact_form"  action="" method="POST">
                                    <input type="hidden" name="action" value="handle_form_submit">
                                    <div class="form-wrap">
                                        <div class="form-input-box input-item">
                                            <label id="numele-lebel" for="numele">Numele</label>
                                            <input autocomplete="off" required class="form-input numele-input" data-label="#numele-lebel" name="numele" type="text">
                                        </div>
                                        <div class="form-input-box input-item">
                                            <label id="number-label" for="number">Numarul de telefon</label>
                                            <input autocomplete="off" required  class="form-input number-input" type="number" name="number" data-label="#number-label">
                                        </div>
                                        <div class="form-input-box input-item large-input">
                                            <label id="email-label" for="message">Mesajul dvs</label>
                                            <input autocomplete="off" required  class="form-input email-input" type="text" name="message" data-label="#email-label">
                                        </div>
                                        <div id="form_results" class="">
                                     
                                        </div>
                                            <div class="contact-form-spinner form_spinner" id="form_spinner"></div>

                                        <div id="form_submit_wrapper" class="input-item submit">
                                            <input type="submit" value="Trimite Mesaj">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </section>